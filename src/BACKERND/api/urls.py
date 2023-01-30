from django.urls import path,include
from .views import *
from rest_framework import routers

router = routers.SimpleRouter()

router.register('announcement', AnnouncementView, basename='announcement')

urlpatterns=[
    path('main/', include(router.urls)),
    path('announcement/<str:pk>', DetailAnnouncementView.as_view()),
    path('create-announcement', createAnnouncement.as_view()),
    path('announcement/<str:pk>/delete-announcement', DeleteAnnouncementView.as_view()),
    path('announcement/<str:pk>/update-announcement', UpdateAnnouncementView.as_view()),
    path("Myprofile",UserDetailAPI.as_view()),
    path("Myprofile/editProfile",UpdateProfileView.as_view()),
    path("Myprofile/announcements",MyAnnouncements.as_view()),
    path("Myprofile/favorites",FavoriteViewSet.as_view()),
    path('userProfile/<str:pk>', ShowProfileAPI.as_view()),
    path('userProfile/<str:pk>/announcements',UserAnnouncements.as_view()),
    path('change-password/<int:pk>/', ChangePasswordView.as_view())    ,
    path('login/',LoginView.as_view()),
    path('webScrap',WebScrap.as_view()),

    ]
