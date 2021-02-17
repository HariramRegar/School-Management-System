# from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.routers import DefaultRouter
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets
import datetime

from .serializers import UserSerializer, NotificationSerializer, UserListSerializer
from .models import User, Notification


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'], url_path='user_list')
    def user_list(self, request):
        try:
            queryset = User.objects.all()
            print(queryset.count())
            print(queryset)
            finaldata = UserSerializer(queryset).data
            return Response(finaldata, status=status.HTTP_200_OK)
        except Exception as ex:
            print(ex.args())
            return Response({'message':str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['post'], url_path='signup')
    def signup(self, request):
        try:
            data = request.data
            print('data: ', request.data)
            user_data = {}
            user_data['first_name'] = data['first_name']
            user_data['last_name'] = data['last_name']
            user_data['user_name'] = data['user_name']
            user_data['email'] = data['email']
            user_data['password'] = data['password']
            user_data['user_type'] = 'student'
            user_data['is_approved'] = False
            user_data['contact_number'] = '8118888888'
            user_data['created_at'] = str(datetime.datetime.now()) 
            user_data['modified_at'] = str(datetime.datetime.now()) 
            print('data: ', user_data)
            if user_data['email']:
                serialized_data = self.serializer_class(data=user_data)
                # print(serialized_data)
                if serialized_data.is_valid():
                    print(serialized_data.validated_data)
                    serialized_data.save()
                    return Response({'message':'Sign up succesful'}, status=status.HTTP_200_OK)
                else:
                    print(serialized_data.errors)
                    return Response({'message':'Somthing went wrong, please try again later.'}, status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response({'message':'Email Id is required'}, status=status.HTTP_200_OK)
        except Exception as ex:
            # print(ex.args())
            return Response({'message':str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class NotificationsViewSet(viewsets.GenericViewSet):
    serializer_class = NotificationSerializer
    # authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='notifications')
    def notifications(self, request):
        try:
            print(request.user.user_name)
            print(request.user.email)
            return Response({'message': 'You are authenticated now'})
        except Exception as ex:
            return Response({'message':str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    @action(detail=False, methods=['get'], url_path='userdetails')
    def userdetails(self, request):
        try:
            queryset = User.objects1.filter(email=request.user.email)
            # print(queryset.count())
            print(queryset)
            finaldata = UserListSerializer(queryset, many=True).data
            return Response({'data':finaldata}, status=status.HTTP_200_OK)
        except Exception as ex:
            # print(ex.args())
            return Response({'message':str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)