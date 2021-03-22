# from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.routers import DefaultRouter
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, viewsets
import datetime

from .serializers import UserSerializer, NotificationSerializer, UserListSerializer,\
    StudentAttendanceSerializer
from .models import User, Notification, StudentAttendance


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'], url_path='user_list')
    def user_list(self, request):
        try:
            queryset = User.objects.all()
            print(queryset.count())
            print(queryset)
            finaldata = UserListSerializer(queryset, many=True).data
            return Response(finaldata, status=status.HTTP_200_OK)
        except Exception as ex:
            print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
            user_data['user_type'] = data['user_type']
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
                    return Response({'message': 'Sign up succesful'}, status=status.HTTP_200_OK)
                else:
                    print(serialized_data.errors)
                    return Response({'message': 'Somthing went wrong, please try again later.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'message': 'Email Id is required'}, status=status.HTTP_200_OK)
        except Exception as ex:
            print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class NotificationsViewSet(viewsets.GenericViewSet):
    serializer_class = NotificationSerializer
    # authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'], url_path='notifications')
    def notifications(self, request):
        try:
            skip =int(request.GET.get('skip',0))
            limit=int(request.GET.get('limit',0))
            if skip<0:
                skip=0
            if limit <=0:
                limit=10
            queryset = Notification.objects.all().order_by('-created_at')
            count = queryset.count()
            data = self.serializer_class(queryset[skip:skip+limit], many=True).data
            return Response({'count':count, 'data': data})
        except Exception as ex:
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['post'], url_path='create_notification')
    def create_notification(self, request):
        try:
            data = request.data
            data['created_by'] = request.user.user_name
            serialized_data = self.serializer_class(data=data)
            if serialized_data.is_valid():
                print(serialized_data.validated_data)
                serialized_data.save()
                return Response({'message': 'Notification added succesfully.'}, status=status.HTTP_200_OK)
            else:
                print(serialized_data.errors)
                return Response({'message': 'Somthing went wrong, please try again later.'}, status=status.HTTP_400_BAD_REQUEST)

            return Response({'data': data})
        except Exception as ex:
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @ action(detail=False, methods=['get'], url_path='userdetails')
    def userdetails(self, request):
        try:
            queryset=User.objects1.filter(email=request.user.email)
            # print(queryset.count())
            print(queryset)
            finaldata=UserListSerializer(queryset, many=True).data
            return Response({'data': finaldata}, status=status.HTTP_200_OK)
        except Exception as ex:
            # print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @ action(detail=False, methods=['get'], url_path='countdetails')
    def countdetails(self, request):
        try:
            queryset=User.objects1.filter(user_type='student')
            studentCount = queryset.count()
            queryset=User.objects1.filter(user_type='teacher')
            teacherCount = queryset.count()
            # finaldata=UserListSerializer(queryset, many=True).data
            return Response({'totalStudent': studentCount, 'totalTeacher':teacherCount}, status=status.HTTP_200_OK)
        except Exception as ex:
            # print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @ action(detail=False, methods=['get'], url_path='users_list')
    def usersList(self, request):
        try:
            skip =int(request.GET.get('skip',0))
            limit=int(request.GET.get('limit',0))
            if skip<0:
                skip=0
            if limit <=0:
                limit=10
            user_type = request.GET.get('user_type','student')
            print('user_type: ',user_type)
            queryset=User.objects1.filter(user_type=user_type)
            finaldata=UserListSerializer(queryset[skip:skip+limit], many=True).data
            return Response({'count':queryset.count(), 'data': finaldata}, status=status.HTTP_200_OK)
        except Exception as ex:
            # print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    @ action(detail=False, methods=['post'], url_path='take_attendance')
    def takeAttendance(self, request):
        try:
            data=request.data
            # remember old state
            _mutable = data._mutable
            # set to mutable
            data._mutable = True
            if data['student_id']:
                data['student']=data['student_id']
                data['status'] = data.get('status', 0)
                data['date'] = datetime.date.today()
                check_records = StudentAttendance.objects.filter(student=data['student'], status=1, date = data['date'])
                if check_records.count()>0:
                    return Response({'message':'Attendance already recorded'}, status=status.HTTP_200_OK)
                serialized_data = StudentAttendanceSerializer(data=data)
                if serialized_data.is_valid():
                    serialized_data.save()
                    print(serialized_data.validated_data)
                    return Response({'message':'Attendance recorded'}, status=status.HTTP_200_OK)
                else:
                    print(serialized_data.errors)
                    return Response({'message':'Somthing went wrong'}, status=status.HTTP_200_OK)
            return Response({'message':'please select a student id'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as ex:
            # print(ex.args())
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
     
    @ action(detail=False, methods=['get'], url_path='attendance_records')
    def AttendanceRecords(self, request):
        try:
            skip =int(request.GET.get('skip',0))
            limit=int(request.GET.get('limit',0))
            if skip<0:
                skip=0
            if limit <=0:
                limit=10
            student_id = request.GET.get('student_id',None)
            if student_id:
                queryset = StudentAttendance.objects.filter(student_id=student_id)
                finaldata=StudentAttendanceSerializer(queryset[skip:skip+limit], many=True).data
                return Response({'count':queryset.count(),'data': finaldata}, status=status.HTTP_200_OK)
            else:
                queryset = StudentAttendance.objects.all()
                finaldata=StudentAttendanceSerializer(queryset[skip:skip+limit], many=True).data
                return Response({'count':queryset.count() , 'data': finaldata}, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({'message': str(ex)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)