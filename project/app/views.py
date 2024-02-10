from django.shortcuts import render,HttpResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import AdminSerializer,StudentSerializer,StuComplainSerializer

from  .models import AdminComplain,Student,StuComplain
from rest_framework import  viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
   

class AdminViewSet(viewsets.ModelViewSet):
    queryset = AdminComplain.objects.all()
    serializer_class = AdminSerializer

class StucomplainViewSet(viewsets.ModelViewSet):
    queryset = StuComplain.objects.all()
    serializer_class = StuComplainSerializer





# ------------genric curd--------------------

# from rest_framework import generics


# class StudentList(generics.ListCreateAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer


# class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer

















# ------mixins based curd-----------
# from rest_framework import mixins
# from rest_framework import generics

# class StudentList(mixins.ListModelMixin,
#                   mixins.CreateModelMixin,
#                   generics.GenericAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

# --------------------adn mixins based--------------------------------------------------------

















# import io
    

# ---------------class based curd----------------------------------------
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from django.http import Http404




# class StudentList(APIView):
#     """
#     List all snippets, or create a new snippet.
#     """
#     def get(self, request, format=None):
#         snippets = Student.objects.all()
#         serializer = StudentSerializer(snippets, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class StudentDetail(APIView):
#     """
#     Retrieve, update or delete a snippet instance.
#     """
#     def get_object(self, pk):
#         try:
#             return Student.objects.get(pk=pk)
#         except Student.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = StudentSerializer(snippet)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = StudentSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# -----------------------End class based--------------------------------------------------------------------




















































# from rest_framework.renderers import JSONRenderer
# from rest_framework.parsers import JSONParser
# from django.http import JsonResponse
# from rest_framework import viewsets
# import io

# ---------------------Function Based Curd-----

# Create your views here.
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# def  home(request):
#     form=Userform()
#     return render (request,'index.html',{'form':form})



# def adminC(req):
#     if req.method=="GET":
#           stu=AdminComplain.objects.all()
#           serilizer_data=AdminSerializer(stu,many=True)
#           json_data=JSONRenderer().render(serilizer_data.data)
#           return HttpResponse(json_data, content_type='application/json')
    
#     elif req.method == "POST":
#          json_data=req.body
#          stream= io.BytesIO(json_data)
#          python_data= JSONParser().parse(stream)
#          serilizer_data=AdminSerializer(data = python_data)
#          if serilizer_data.is_valid():
#               serilizer_data.save()
#               res ={'msg':"data save "}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          json_data=JSONRenderer().render(serilizer_data.errors)
#          return HttpResponse(json_data,content_type='application/json')
    
#     elif req.method == 'PUT':
#           json_data = req.body
#           stream = io.BytesIO(json_data)
#           complex_data = JSONParser().parse(stream)
#           id = complex_data.get('id')
#           stu = AdminComplain.objects.get(id=id)
#           serializer = AdminSerializer(stu, data=complex_data, partial=True)
#           if serializer.is_valid():
#                serializer.save()
#                res = {'msg':'Data Updated !!'}
#                json_data = JSONRenderer().render(res)
#                return HttpResponse(json_data, content_type='application/json')
#           json_data = JSONRenderer().render(serializer.errors)
#           return HttpResponse(json_data, content_type='application/json')  
#     elif req.method == 'DELETE':
#          json_data=req.body
#          stream=io.BytesIO(json_data)
#          python_data=JSONParser().parse(stream) 
#          id=python_data.get('id')
        
         
#          if id:
#               uid=AdminComplain.objects.get(id=id)
#               uid.delete()
#               res = {'mes':"data delete"}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          error = JSONRenderer().render(serializer.error)
#          return HttpResponse(error,content_type='application/json')


# @csrf_exempt 
# def student(req):
#     if req.method=="GET":
#           stu=Student.objects.all()
#           serilizer_data=StudentSerializer(stu,many=True)
#           json_data=JSONRenderer().render(serilizer_data.data)
#           return HttpResponse(json_data, content_type='application/json')
    
#     elif req.method == "POST":
#          json_data=req.body
#          stream= io.BytesIO(json_data)
#          python_data= JSONParser().parse(stream)
#          serilizer_data=StudentSerializer(data = python_data)
#          if serilizer_data.is_valid():
#               serilizer_data.save()
#               res ={'msg':"data save "}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          json_data=JSONRenderer().render(serilizer_data.errors)
#          return HttpResponse(json_data,content_type='application/json')
    
#     elif req.method == 'PUT':
#           json_data = req.body
#           stream = io.BytesIO(json_data)
#           complex_data = JSONParser().parse(stream)
#           id = complex_data.get('id')
#           stu = Student.objects.get(id=id)
#           serializer = StudentSerializer(stu, data=complex_data, partial=True)
#           if serializer.is_valid():
#                serializer.save()
#                res = {'msg':'Data Updated !!'}
#                json_data = JSONRenderer().render(res)
#                return HttpResponse(json_data, content_type='application/json')
#           json_data = JSONRenderer().render(serializer.errors)
#           return HttpResponse(json_data, content_type='application/json')  
#     elif req.method == 'DELETE':
#          json_data=req.body
#          stream=io.BytesIO(json_data)
#          python_data=JSONParser().parse(stream) 
#          id=python_data.get('id')
        
         
#          if id:
#               uid=Student.objects.get(id=id)
#               uid.delete()
#               res = {'mes':"data delete"}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          error = JSONRenderer().render(serializer.error)
#          return HttpResponse(error,content_type='application/json')


# @csrf_exempt 
# def stuComplain(req):
#     if req.method=="GET":
#           stu=StuComplain.objects.all()
#           serilizer_data=StuComplainSerializer(stu,many=True)
#           json_data=JSONRenderer().render(serilizer_data.data)
#           return HttpResponse(json_data, content_type='application/json')
    
#     elif req.method == "POST":
#          json_data=req.body
#          stream= io.BytesIO(json_data)
#          python_data= JSONParser().parse(stream)
#          serilizer_data=StuComplainSerializer(data = python_data)
#          if serilizer_data.is_valid():
#               serilizer_data.save()
#               res ={'msg':"data save "}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          json_data=JSONRenderer().render(serilizer_data.errors)
#          return HttpResponse(json_data,content_type='application/json')
    
#     elif req.method == 'PUT':
#           json_data = req.body
#           stream = io.BytesIO(json_data)
#           complex_data = JSONParser().parse(stream)
#           id = complex_data.get('id')
#           stu = StuComplain.objects.get(id=id)
#           serializer = StuComplainSerializer(stu, data=complex_data, partial=True)
#           if serializer.is_valid():
#                serializer.save()
#                res = {'msg':'Data Updated !!'}
#                json_data = JSONRenderer().render(res)
#                return HttpResponse(json_data, content_type='application/json')
#           json_data = JSONRenderer().render(serializer.errors)
#           return HttpResponse(json_data, content_type='application/json')  
#     elif req.method == 'DELETE':
#          json_data=req.body
#          stream=io.BytesIO(json_data)
#          python_data=JSONParser().parse(stream) 
#          id=python_data.get('id')
        
         
#          if id:
#               uid=StuComplain.objects.get(id=id)
#               uid.delete()
#               res = {'mes':"data delete"}
#               json_data=JSONRenderer().render(res)
#               return HttpResponse(json_data,content_type='application/json')
#          error = JSONRenderer().render(serializer.error)
#          return HttpResponse(error,content_type='application/json')





