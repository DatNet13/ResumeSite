# Generated by Django 3.0.2 on 2020-02-02 19:47

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0022_delete_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(help_text='your first name for profile!', max_length=50)),
                ('last_name', models.CharField(help_text='your last name for profile!', max_length=50)),
                ('biography', models.TextField(help_text='<b>Max count of characters equals 1000!</b>', max_length=1000)),
                ('image', models.ImageField(help_text="<b style='color: red'; title='warning'>recommended resolution 300x400 or 3096x4128</b>", storage=django.core.files.storage.FileSystemStorage(location='C:\\Users\\datoq_000\\Desktop\\Project/app/static/img/'), upload_to='')),
                ('birth_date', models.DateField()),
                ('country', models.CharField(help_text='Your country name', max_length=100)),
                ('city', models.CharField(help_text='Your city name', max_length=100)),
                ('first_name_ge', models.CharField(help_text='სახელი პროფილისთვის!', max_length=50)),
                ('last_name_en', models.CharField(help_text='გვარი პროფილისთვის!', max_length=50)),
                ('biography_ge', models.TextField(help_text='<b>სიმბოლოების მაქსიმალური რაოდენობაა  1000!</b>', max_length=1000)),
                ('country_ge', models.CharField(help_text='თქვენი ქვეყნის სახელი', max_length=100)),
                ('city_ge', models.CharField(help_text='თქვენი ქალაქის სახელი', max_length=100)),
            ],
        ),
    ]