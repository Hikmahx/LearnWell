from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from main.models import Subject, Topic
from .serializers import SubjectSerializer, TopicSerializer
from django.core.exceptions import ValidationError

# Create your views here.

class SubjectListView(generics.ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def post(self, request, *args, **kwargs):
        # Validate req.body
        serializer = SubjectSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            # Check if topics field is empty (should have at least one topic)
            if not request.data.get('topics'):
                return Response({
                    'message': 'Topics field cannot be empty'
                }, status=status.HTTP_400_BAD_REQUEST)
                
            # Check if any two topics have the same title
            topics = request.data.get('topics')
            topic_titles = [topic.get('title') for topic in topics]
            if len(set(topic_titles)) != len(topic_titles):
                return Response({
                    'message': 'Duplicate topic titles provided, topic title should be unique in a subject'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Create new topics or use existing ones
            new_topics = []
            for topic in topics:
                # Check if the topic already exists
                existing_topic = Topic.objects.filter(title=topic['title']).first()
                # If the topic has already been created, return the existing topic
                if existing_topic:
                    new_topics.append(existing_topic)
                else:
                    # If it is a new topic, create a new topic
                    new_topic = Topic(title=topic['title'], video=topic.get('video'), description=topic.get('description'))
                    new_topic.save()
                    new_topics.append(new_topic)
                    
            # Create the new subject with the provided title and topics
            new_subject = Subject(title=request.data['title'])
            new_subject.save()
            new_subject.topics.set(new_topics)
            
            # Serialize the newly created subject and return it in the response
            serializer = SubjectSerializer(new_subject)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response({
                'message': 'An error occurred while creating the subject'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            
class SubjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def get_object(self):
        subject_id = self.kwargs['subject_id']
        queryset = Subject.objects.all().prefetch_related('topics')
        return get_object_or_404(queryset, id=subject_id)

    # get the subject using the subject_id
    def get(self, request, subject_id):
        subject = self.get_object()
        serializer = self.serializer_class(subject)
        return Response(serializer.data)

    # update the subject using the subject_id
    def put(self, request, subject_id):
        subject = self.get_object()
        serializer = self.serializer_class(subject, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # delete subject and its topics
    def delete(self, request, subject_id):
        subject = self.get_object()
        topics = subject.topics.all()

        for topic in topics:
            # if topic is associated with more than one subject
            if topic.subjects.count() > 1:
                # remove the subject from the topic
                topic.subjects.remove(subject)
            # else, if topic is only associated with the subject being deleted
            else:
                topic.delete()

        subject.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TopicListView(generics.ListAPIView):
    serializer_class = TopicSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Topic.objects.filter(subject_id=subject_id)