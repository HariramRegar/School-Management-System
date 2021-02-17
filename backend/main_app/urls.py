from . import views
from django.urls import path, include
from django.conf.urls import url


urlpatterns = [
    url('user_list/$',
        views.UserViewSet.as_view({'get': 'user_list'}), name='user_list'),
    url('signup/$',
        views.UserViewSet.as_view({'post': 'signup'}), name='signup'),
    url('notifications/$',
        views.NotificationsViewSet.as_view({'get': 'notifications'}), name='notifications'),
    url('userdetails/$',
        views.NotificationsViewSet.as_view({'get': 'userdetails'}), name='userdetails'),
]
