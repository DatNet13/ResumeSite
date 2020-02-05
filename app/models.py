from django.db import models
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import PIL
from PIL import Image

# Storage for uploaded profile images
fs = FileSystemStorage(location=settings.BASE_DIR+'/app/static/img/')

# Model of the main user
class Person(models.Model):
    # EN Content
    first_name = models.CharField(max_length=50, help_text="your first name for profile!")
    last_name = models.CharField(max_length=50, help_text="your last name for profile!")
    biography = models.TextField(max_length=1000, help_text="<b>Max count of characters equals 1000!</b>")
    image = models.ImageField(storage=fs, help_text="<b style='color: red'; title='warning'>recommended resolution 300x400 or 3096x4128</b>")
    birth_date = models.DateField()
    country = models.CharField(max_length=100, help_text="Your country name")
    city = models.CharField(max_length=100, help_text="Your city name")
    # GE Content
    first_name_ge = models.CharField(max_length=50, help_text="სახელი პროფილისთვის!")
    last_name_ge = models.CharField(max_length=50, help_text="გვარი პროფილისთვის!")
    biography_ge = models.TextField(max_length=1000, help_text="<b>სიმბოლოების მაქსიმალური რაოდენობაა  1000!</b>")
    country_ge = models.CharField(max_length=100, help_text="თქვენი ქვეყნის სახელი")
    city_ge = models.CharField(max_length=100, help_text="თქვენი ქალაქის სახელი")


    # Image Compression to 300x400 px, and save
    def save(self):
        super(Person, self).save()
        image = Image.open(self.image)
        (width, height) = image.size
        
        # Custom Size For Uploaded Image
        size = ( 300, 400)
        image = image.resize(size, Image.ANTIALIAS)
        image.save(self.image.path)


    def __str__(self):
        result = str(self.first_name) + " | " + str(self.first_name_ge)
        return result
    

# Model for skills and progresses
class Skill(models.Model):
    skill_name = models.CharField(max_length=100)
    progress = models.IntegerField(default=0)

    def __str__(self):
        return self.skill_name


class Project(models.Model):
    project_title = models.CharField(max_length=100, help_text="Title Of Project.")
    url = models.CharField(max_length=10000, help_text="<i>URL Address of the project.")
    unedited_image = models.ImageField(storage=fs, help_text="Image for project info (no edit when save).")
    image = models.ImageField(storage=fs, help_text="Project's Screenshot.<b style='color: red;'>Recommended Resolution For Image Is 1366x768!</b>")
    used_technologies = models.TextField(max_length=1000, help_text='<b>write technologie names like : <i>HTML | CSS | Java | JavaScript</i>...</b>')
    

    def save(self):
        super(Project, self).save()
        image = Image.open(self.image)
        (width, height) = image.size
        # Custom Size For Uploaded Image
        size = (int(width / 2), int(height / 2))
        image = image.resize(size, Image.ANTIALIAS)
        image.save(self.image.path)


    def __str__(self):
        return self.project_title