from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save

CATEGORY_CHOICES = (
    ('P','Primaire'),
    ('C','Collège'),
    ('L','Lycée')
)
MODALITE_CHOICES= (
    ('O','En ligne'),
    ('P','Présentiel')
)

WILAYA_CHOICES= (
    (1, 'Adrar'),
    (2, 'Chlef'),
    (3, 'Laghouat'),
    (4, 'Oum El Bouaghi'),
    (5, 'Batna'),
    (6, 'Béjaïa'),
    (7, 'Biskra'),
    (8, 'Béchar'),
    (9, 'Blida'),
    (10, 'Bouira'),
    (11, 'Tamanrasset'),
    (12, 'Tébessa'),
    (13, 'Tlemcen'),
    (14, 'Tiaret'),
    (15, 'Tizi Ouzou'),
    (16, 'Alger'),
    (17, 'Djelfa'),
    (18, 'Jijel'),
    (19, 'Sétif'),
    (20, 'Saïda'),
    (21, 'Skikda'),
    (22, 'Sidi Bel Abbès'),
    (23, 'Annaba'),
    (24, 'Guelma'),
    (25, 'Constantine'),
    (26, 'Médéa'),
    (27, 'Mostaganem'),
    (28, 'M''Sila'),
    (29, 'Mascara'),
    (30, 'Ouargla'),
    (31, 'Oran'),
    (32, 'El Bayadh'),
    (33, 'Illizi'),
    (34, 'Bordj Bou Arreridj'),
    (35, 'Boumerdès'),
    (36, 'El Tarf'),
    (37, 'Tindouf'),
    (38, 'Tissemsilt'),
    (39, 'El Oued'),
    (40, 'Khenchela'),
    (41, 'Souk Ahras'),
    (42, 'Tipaza'),
    (43, 'Mila'),
    (44, 'Aïn Defla'),
    (45, 'Naâma'),
    (46, 'Aïn Témouchent'),
    (47, 'Ghardaïa'),
    (48, 'Relizane'),
    (49, 'Timimoun'),
    (50, 'Bordj Badji Mokhtar'),
    (51, 'Ouled Djellal'),
    (52, 'Béni Abbès'),
    (53, 'In Salah'),
    (54, 'In Guezzam'),
    (55, 'Touggourt'),
    (56, 'Djanet'),
    (57, "El M'Ghair"),
    (58, 'El Meniaa')

)





class Announcement(models.Model):
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_announcement')
    id =models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=60)
    module=models.CharField(max_length=60, default='non spécifié')
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=1, default='')
    modalite = models.CharField(choices=MODALITE_CHOICES, max_length=1, default='')
    description=models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='api/images/annonces',null=True,blank=True)
    price=models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    wilaya= models.IntegerField(choices=WILAYA_CHOICES, default=16)
    commune =models.CharField(max_length=30,default='Non spécifié')
    appartment_address= models.CharField(max_length=150,default='')

    def __str__(self):
        return self.name

class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    announcement = models.ForeignKey(Announcement, on_delete=models.CASCADE)

    class meta: 
        ordering = ['-updated', '-created']


class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='api/images/users/',null=True,blank=True)
    telnumber = models.IntegerField(blank=True,null=True)
    address_User=models.CharField(max_length=200, null=True,blank=True)

    #announcements=models.ForeignKey(Announcement, on_delete=models.CASCADE,blank=True,null=True)

    
    def __str__(self):
        return self.user.username

#pour automatiquement créer un profil lorsqu'un un utilisateur est ajouté
def create_profile (sender,instance,created, **kwargs):
    if created:
        user_profile=UserProfile(user=instance)
        user_profile.save()
post_save.connect(create_profile,sender=User)



class Offer(models.Model):
    sender=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    announcement_offer=models.ForeignKey(Announcement,on_delete=models.CASCADE)
    created=models.DateTimeField(auto_now_add=True)
    state=models.BooleanField(default=False)

    def __str__(self):
        return 'offer made by', self.sender.username, 'in', self.announcement_offer.name
    
class Notification(models.Model):
    sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='receiver')
    announcement = models.ForeignKey(Announcement, on_delete=models.CASCADE)
    type = models.CharField(max_length=20) # enrollment, acceptation, rejection
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)



    