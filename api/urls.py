# myapp/urls.py

from django.urls import path
from .views import SubjectListView, TopicListView, SubjectDetailView
urlpatterns = [
    path('subjects/', SubjectListView.as_view(), name='subject-list'),
    path('subjects/<int:subject_id>', SubjectDetailView.as_view(), name='subject-detail'),
    path('subjects/<int:subject_id>/topics/', TopicListView.as_view(), name='topic-list'),
]
