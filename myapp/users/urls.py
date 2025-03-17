from django.urls import path,include
from .views import SignupView
from dj_rest_auth.views import LoginView,LogoutView


urlpatterns = [
    path('signup/',SignupView.as_view(), name='signup'),
    path('login/',LoginView.as_view(), name='login'),
    path('logout/',LogoutView.as_view(), name='logout'),
    path('auth/', include('allauth.urls')),
]