from django.contrib import admin
from .models import Announcement,UserProfile, Offer, Favorite,Notification
# Register your models here.
admin.site.register(Announcement)
admin.site.register(UserProfile)
admin.site.register(Offer)
admin.site.register(Notification)
admin.site.register(Favorite)