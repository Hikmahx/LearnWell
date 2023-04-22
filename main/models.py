from django.db import models

# Create your models here.

class Subject(models.Model):
    title = models.CharField(max_length=255, unique=True)
    
    def __str__(self):
        return self.title

class Topic(models.Model):
    title = models.CharField(max_length=255, unique=True)
    video = models.CharField(max_length=255)
    description = models.TextField()
    # a topic can belong to many subjects and a subject can have many topics
    # if you have a subject object, you can access its related topics objects like this: subject.topics.all()
    subjects = models.ManyToManyField(Subject, related_name='topics')

    def __str__(self):
        return self.title
