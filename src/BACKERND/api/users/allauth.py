from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter
class AccountAdapter(DefaultAccountAdapter):

  def get_login_redirect_url(self, request):
      return 'http://127.0.0.1:8000/api/main/announcement'
  def get_logout_redirect_url(self, request):
      return 'http://127.0.0.1:8000/api/main/announcement'
