from django.test import TestCase
from django.contrib.auth.models import User
from django.test import RequestFactory
from api.models import Announcement
from api.serializers import CreateAnnouncementSerializer
from api.views import createAnnouncement
from django.test import Client
from django.urls import reverse
from rest_framework.test import APITestCase

from api.models import UserProfile
from api.serializers import ProfileSerializer

class createAnnouncementTestCase(APITestCase):

    def test_create_announcement_with_valid_data(self):
        obj = Announcement.objects.create(
            user = User.objects.create(username="aa",password="aa"),
            name = "Cours de soutien Fr",
            module = "Français",
            category = "P",
            modalite = "P",
            description = "urgfcyeuvknrjbh",
            price = 1500,
            wilaya = 16,
            commune = "Fouka",
            appartment_address = "jbhdcbzdbh"
        )
        self.assertEqual(len(Announcement.objects.filter(id = obj.id)), 1)
class createUserTestCase(APITestCase):

    def test_create_user_with_valid_data(self):
        obj= User.objects.create(username="aa",password="aa")
        self.assertEqual(len(User.objects.filter(id = obj.id)), 1)
    def test_delete_user_with_valid_data(self):
        obj= User.objects.create(username="aa",password="aa")
        obj.delete()
        self.assertEqual(len(User.objects.all()), 0)
