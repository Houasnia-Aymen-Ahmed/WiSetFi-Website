from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.


class ServiceView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class FeedbackView(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


class FeatureView(generics.ListAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
