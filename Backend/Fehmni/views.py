from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from social_django.models import UserSocialAuth
import json

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def google_auth(request):
    user = request.user
    try:
        social = UserSocialAuth.objects.get(user=user, provider='google-oauth2')
        data = {
            'provider': social.provider,
            'uid': social.uid,
            'access_token': social.extra_data['access_token'],
            'refresh_token': social.extra_data.get('refresh_token', ''),
            'expires_at': social.extra_data['expires']
        }
        return Response(data)
    except UserSocialAuth.DoesNotExist:
        return Response({'message': 'No Google Sign-In found for user'}, status=400)