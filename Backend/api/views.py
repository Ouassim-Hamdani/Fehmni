from django.shortcuts import render
from rest_framework import generics, status,permissions,views,viewsets
from django.views.generic import ListView         #access to http status that we will use for custom reponses 
from rest_framework.views import APIView            #generic apiview
from rest_framework.response import Response         #send custom reponse
from .models import Announcement, UserProfile, Offer,Favorite
from django.contrib.auth.models import User
from django.contrib import auth
from .serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.authtoken.models import Token
from .permissions import IsOwnerOrReadOnly
from rest_framework.decorators import action
import requests
from bs4 import BeautifulSoup

from auth.services import jwt_login, google_validate_id_token

from .services import user_get_or_create



class AnnouncementView(viewsets.ModelViewSet):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    #queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    def get_queryset(self):
        return Announcement.objects.all()
    allowed_actions = ('list', 'retrieve', 'destroy', 'add_to_favorites','delete_from_favorites','search')
    
    

    @action(detail=True, methods=['post'])
    def add_to_favorites(self, request, pk=None):
        announcement = self.get_object()
        user = request.user
        favorite, created = Favorite.objects.get_or_create(user=user, announcement=announcement)
        if created:
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])

    def delete_from_favorites(self, request, pk=None):
         favorite = self.get_object()
         favorite.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['get'])
    def search(self, request):
        name = request.query_params.get('name', None)
        wilaya = request.query_params.get('wilaya', None)
        category = request.query_params.get('category', None)
        description = request.query_params.get('description', None)
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        queryset = Announcement.objects.all()
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        if wilaya is not None:
            queryset = queryset.filter(wilaya__contains=wilaya)
        if category is not None:
            queryset = queryset.filter(category=category)
        if description is not None:
            queryset = queryset.filter(description_contains=description)
        serializer = self.get_serializer(queryset, many=True)
        if start_date is not None and end_date is not None:
            queryset = queryset.filter(created__range=[start_date, end_date])
        return Response(serializer.data)
    


class MyAnnouncements(generics.ListAPIView):
    serializer_class = AnnouncementSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        user = self.request.user
        return Announcement.objects.filter(user=user)




class DetailAnnouncementView(generics.ListAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

    def get_Announcement(self, pk):
        try:
            return Announcement.objects.get(id=pk)
        except:
            return None

    def get(self, request, pk):
        announcement = self.get_Announcement(pk=pk)
        if announcement == None:
            return Response({"status": "fail", "message": "Announcement with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(announcement)
        return Response({"status": "success", "announcement": serializer.data})





class DeleteAnnouncementView(generics.ListAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = (IsAuthenticated,)
    def get_Announcement(self, pk):
        try:
            return Announcement.objects.get(id=pk)
        except:
            return None
    
    
    def delete(self, request, pk):
        announcement = self.get_Announcement(pk=pk)
        if announcement == None:
            return Response({"status": "fail", "message": "Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        announcement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




class UpdateAnnouncementView(generics.ListAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = (IsAuthenticated,)

    def get_Announcement(self, pk):
        try:
            return Announcement.objects.get(id=pk)
        except:
            return None
    
    def patch(self, request, pk):
        announcement = self.get_Announcement(pk)
        if announcement == None:
            return Response({"status": "fail", "message": "announcement with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(
            announcement, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "note": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)





class createAnnouncement(APIView):
     serializer_class = CreateAnnouncementSerializer


     def post(self, request):
         serializer = self.serializer_class(data=request.data)
         if serializer.is_valid():
            name =serializer.data['name']
            module =serializer.data['module']
            description=serializer.data['description']
            category = serializer.data['category']
            modalite=serializer.data['modalite']
            image =serializer.data['image']
            price =serializer.data['price']
            wilaya= serializer.data['wilaya']
            commune= serializer.data['commune']
            idd= serializer.data['idd']
            user=User.objects.get(id=idd)
            appartment_address = serializer.data['appartment_address']
            announcement= Announcement.objects.create(user=user,module=module, name= name, description =description,category=category, modalite=modalite,image=image,price=price, wilaya=wilaya,appartment_address=appartment_address ,commune=commune)
            announcement.save()
            return Response({"status": "saved","announcement" : serializer.data}, status=status.HTTP_200_OK)
         else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)





class UserDetailAPI(APIView):
  #permission_classes = (IsAuthenticated,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    id=request.id   
    user =User.objects.get(id=id)
    userprofile = UserProfile.objects.get(user=user)
    serializer = ProfileSerializer(userprofile)
    return Response(serializer.data)




class UpdateProfileView(generics.UpdateAPIView):
    #permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer

    def get_object(self):
        return UserProfile.objects.get(user=self.request.user)
    




class ShowProfileAPI(APIView):
 # permission_classes = (IsAuthenticated,)
  permission_classes = (AllowAny,)

  def get_UserProfile(self, pk):
        try:
            return User.objects.get(id=pk)
        except:
            return None


  def get(self, request, pk):
        user = self.get_UserProfile(pk=pk)
        profile=UserProfile.objects.get(user=user)
        if user == None:
            return Response({"status": "fail", "message": 'Usert with Id: {pk} not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer =ProfileSerializer(profile)
        return Response({"status": "success", "User": serializer.data})


class UserAnnouncements(generics.ListAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer(many=True)

    def get_user(self, pk):
        try:
            return User.objects.get(id=pk)
        except:
            return None

    def get(self, request, pk):
        user = self.get_user(pk=pk)

        announcement = Announcement.objects.filter(user=user)
        if announcement == None:
            return Response({"status": "fail", "message": "Announcement with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(announcement)
        return Response({"status": "success", "announcement": serializer.data})






class RegisterUserAPIView(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer





class LoginView(APIView):
    def post(self,request):
        serializer=LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user=serializer.save()
            auth.login(request,user)
            token,created=Token.objects.get_or_create(user=user)
            return Response({"token":token.key},status=200)
        return Response("invalid username and password try again")




class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer


class FavoriteViewSet(generics.ListAPIView):
   
    
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def get_queryset(self):
        user = self.request.user
        return Favorite.objects.filter(user=user)

class WebScrap(generics.ListAPIView):
   
    page = requests.get(f"https://www.apprentus.com/fr/s/Algerie/Soutien-scolaire/27.2154,10.3063/5/25/1/")
   
    def extraData(page):
        src = page.content
        soup = BeautifulSoup(src, "lxml")

        courses = soup.find_all("div", {'class': 'search-result'})
        user=User.objects.get(id=1)
        for course in courses:

                course_title = course.find("span", {'class': 'title'}).text.strip()
                course_price = int(course.find("span", {'class': 'price'}).text.strip(" DZD"))
                course_result_tags = course.find("div", {'class':'result-tags'}).text.strip()
                user_location = course.find("a", {'class':'name'}).text.strip().split("-")
                for i in range(0, len(user_location)):
                    user_location[i] = user_location[i].strip()
                description = course.find("div", {'class':'result-content'}).text.strip().replace("Professeur fiable:", "")
                Announcement.objects.create(user=user,module= course_result_tags, name= course_title, description =description,price= course_price, appartment_address=user_location[1])
                
                
            #json_data = json.dumps(announces)
           
    extraData(page)
    serializer_class = AnnouncementSerializer
    queryset = Announcement.objects.all()


