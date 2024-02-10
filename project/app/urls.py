# from django.urls import path
# from .views import *




# urlpatterns = [
#     # path('adminC/',adminC,name="adminC"),
#     path('StudentList/',StudentList.as_view(),name="student"),
#     path('StudentDetail/<int:pk>/',StudentDetail.as_view(),name="StudentDetail"),
#     # path('stuComplain/',stuComplain,name="stuComplain")
 
    
   
# ]


from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from .views import *
router = routers.DefaultRouter()
router.register(r'student', UserViewSet)
router.register(r'adminc',AdminViewSet)
router.register(r'stucomplain',StucomplainViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]