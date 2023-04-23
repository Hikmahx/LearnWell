from django.shortcuts import get_object_or_404
from rest_framework import generics
from main.models import Subject, Topic
from .serializers import SubjectSerializer, TopicSerializer

# Create your views here.

class SubjectListView(generics.ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


class SubjectDetailView(generics.RetrieveAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def get_object(self):
            subject_id = self.kwargs['subject_id']
            queryset = Subject.objects.all().prefetch_related('topics')
            return get_object_or_404(queryset, id=subject_id)


class TopicListView(generics.ListAPIView):
    serializer_class = TopicSerializer

    def get_queryset(self):
        subject_id = self.kwargs['subject_id']
        return Topic.objects.filter(subject_id=subject_id)