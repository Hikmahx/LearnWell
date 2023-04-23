from rest_framework import serializers
from main.models import Subject, Topic

class TopicSerializer(serializers.ModelSerializer):
  class Meta:
    model = Topic
    fields = '__all__'
    

class SubjectSerializer(serializers.ModelSerializer):
  #  includes all the topics that belong to the subject
  topics = TopicSerializer(many=True, read_only=True, source='topics.all')

  class Meta:
    model = Subject
    # fields = '__all__'
    fields = ('id', 'title', 'topics')


