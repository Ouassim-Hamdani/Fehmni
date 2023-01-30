from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Announcement,UserProfile, Offer, Favorite
from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model= UserProfile
        fields = '__all__'
class UserSerializer(ModelSerializer):
    class Meta:
        model= User
        fields = ['username']


class AnnouncementSerializer(ModelSerializer):
   user=UserSerializer()
   class Meta:
        model = Announcement
        fields = '__all__'
        read_only_fields= ['user']

class CreateAnnouncementSerializer(ModelSerializer):
  idd=serializers.IntegerField()
  class Meta:
        model = Announcement
        fields=('idd','name','module','description','category','modalite','price','image','wilaya','commune','appartment_address')

class OfferSerializer(ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "first_name", "last_name", "username"]



class ProfileSerializer(ModelSerializer):
  announcements = AnnouncementSerializer(many=True, read_only=True)
  user=UserSerializer() 
    #favorites = serializers.PrimaryKeyRelatedField(many=True,queryset=Announcement.objects.all())
  class Meta: 
        model= UserProfile
        fields=  ('user','image', 'telnumber', 'address_User','announcements')






class RegisterSerializer(ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  telnumber = serializers.IntegerField()
  address_User=serializers.CharField(max_length=200, default='')


  class Meta:
    model = User
    fields = ('username', 'password', 'password2',
         'email', 'first_name', 'last_name','telnumber','address_User')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }


  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  
  

  def create(self, validated_data):
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name']
    )
    user.set_password(validated_data['password'])
    user.save()

    user_profile=UserProfile.objects.create(
      user=user,
      telnumber=validated_data['telnumber'],
      address_User=validated_data['address_User']
    )
    user_profile.save()
    return user
    



class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance



class LoginSerializer(serializers.Serializer):
    
    username = serializers.CharField(
        label="Username",
        write_only=True
    )
    password = serializers.CharField(
        label="Password",
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
  
    def validate(self, attrs):
        # Take username and password from request
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            # Try to authenticate the user using Django auth framework.
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                # If we don't have a regular user, raise a ValidationError
                msg = 'Access denied: wrong username or password.'
                print("Khtok")
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        # We have a valid user, put it in the serializer's validated_data.
        # It will be used in the view.
        attrs['user'] = user
        return attrs




class UpdateUserSerializer(serializers.ModelSerializer):
    user=UserSerializer(many=False)
    class Meta:
        model = UserProfile
        fields = ('user','image', 'telnumber', 'address_User')



    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        instance.image = validated_data['image']
        instance.telnumber = validated_data['telnumber']
        instance.address_User= validated_data['address_User']
        username = self.data['user']['username']
        user = User.objects.get(username=username)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.update(user, user_data)
        instance.save()

        return instance
 
class FavoriteSerializer(ModelSerializer):
    announcement=AnnouncementSerializer(many=True)
    class Meta:
      model = Favorite
      fields='__all__'