# from rest_framework.viewsets import ModelViewSet
from rest_framework.routers import DefaultRouter
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets

from .serializers import UserSerializer
from .models import User


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'], url_path='user_list')
    def user_list(self, request):
        try:
            result = User.objects.all()
            return Response(result, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response(ex)

    @action(detail=False, methods=['post'], url_path='signup')
    def signup(self, request):
        try:
            result = User.objects.all()
            return Response(result, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response(ex)

    @action(detail=False, methods=['post'], url_path='signin')
    def signin(self, request):
        try:
            result = User.objects.all()
            return Response(result, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response(ex)
