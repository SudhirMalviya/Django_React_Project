from django.db import models

class AdminComplain(models.Model):
      name=models.CharField(max_length=254)
      email=models.EmailField()
      password=models.CharField(max_length=10)
      def __self__(self):
           data=self.name+self.email+self.password
           return  data
      
class Student(models.Model):
     name=models.CharField(max_length=254)
     email=models.EmailField()
     password=models.CharField(max_length=10)
     def __self__(self):
           data=self.name+self.email+self.password
           return  data




class StuComplain(models.Model):
    stuid=models.IntegerField()
    stucomplain=models.CharField(max_length=254)
    ans=models.CharField(max_length=255, blank=True, null=True)
