
from django.contrib import admin
from django.urls import path, include,re_path
from rest_framework.authtoken import views
from django.conf import settings
from django.conf.urls.static import static
from .views import google_auth
from users import views
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls')),
    #path('api/token/', TokenObtainPairView.as_view(),name='token obtain pair'),
    #path('api/token/refresh', TokenRefreshView.as_view(),name='token refresh'),
    path('api/token/', include('social_django.urls', namespace='social')),
    path('api/google-auth/', google_auth, name='google_auth'),   
     path('accounts/', include('allauth.urls'))  
    
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
