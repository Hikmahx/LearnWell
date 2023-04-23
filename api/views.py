from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from main.models import Subject, Topic
from .serializers import SubjectSerializer, TopicSerializer

# Create your views here.

class SubjectListView(generics.ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


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