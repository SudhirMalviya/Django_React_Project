from rest_framework import serializers
from .models import AdminComplain, Student, StuComplain

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminComplain
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class StuComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = StuComplain
        fields = ['stuid', 'stucomplain', 'ans']
        extra_kwargs = {'ans': {'required': False}}
