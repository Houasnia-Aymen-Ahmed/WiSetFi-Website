from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)

# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        normalized_email = self.normalize_email(email)
        user = self.model(email=normalized_email, name=name)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, name, password=None):
        user = self.create_user(email, name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254, unique=True)
    name = models.CharField(max_length=100)
    user_type = models.CharField(max_length=50)
    clientType = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email


class Service(models.Model):
    serviceId = models.CharField(max_length=100, null=True, unique=True)
    icon = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100, null=True)
    content = models.TextField(null=True)


class Feature(models.Model):
    featureId = models.CharField(max_length=100, null=True, unique=True)
    icon = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100, null=True)
    content = models.TextField(null=True)


class Feedback(models.Model):
    feedbackId = models.CharField(max_length=100, null=True, unique=True)
    icon = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100, null=True)
    name = models.CharField(max_length=100, null=True)
    content = models.TextField(null=True)
