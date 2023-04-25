# myapp/urls.py

from django.urls import path
from .views import SubjectListView, TopicListView, SubjectDetailView, SearchSubjectsAndTopicsView
urlpatterns = [
    path('subjects/', SubjectListView.as_view(), name='subject-list'),
    path('subjects/<int:subject_id>', SubjectDetailView.as_view(), name='subject-detail'),
    path('subjects/search', SearchSubjectsAndTopicsView.as_view(), name='search-subjects-and-topics'),
    path('subjects/<int:subject_id>/topics/', TopicListView.as_view(), name='topic-list'),
]
