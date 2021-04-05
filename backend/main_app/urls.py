from . import views
from django.urls import path, include
from django.conf.urls import url


urlpatterns = [
    url('user_list/$',
        views.UserViewSet.as_view({'get': 'user_list'}), name='user_list'),
    url('signup/$',
        views.RegisterViewSet.as_view({'post': 'signup'}), name='signup'),
    url('notifications/$',
        views.NotificationsViewSet.as_view({'get': 'notifications'}), name='notifications'),
    url('create_notification/$',
        views.NotificationsViewSet.as_view({'post': 'create_notification'}), name='create_notification'),
    url('userdetails/$',
        views.UserViewSet.as_view({'get': 'userdetails'}), name='userdetails'),
    url('countdetails/$',
        views.UserViewSet.as_view({'get': 'countdetails'}), name='countdetails'),
    url('users_list/$',
        views.UserViewSet.as_view({'get': 'usersList'}), name='usersList'),
    url('take_attendance/$',
        views.AttendanceViewSet.as_view({'post': 'takeAttendance'}), name='take_attendance'),
    url('attendance_records/$',
        views.AttendanceViewSet.as_view({'get': 'AttendanceRecords'}), name='attendance_records'),
]
