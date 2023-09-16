from django.urls import path
from .views import *

urlpatterns = [
    path("services", ServiceView.as_view()),
    path("features", FeatureView.as_view()),
    path("feedbacks", FeedbackView.as_view()),
]
