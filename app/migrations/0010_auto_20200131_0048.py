# Generated by Django 3.0.2 on 2020-01-30 20:48

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_auto_20200131_0046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='image',
            field=models.ImageField(help_text="<b style='color: black;' title='info'>recommended resolution 300x400 or 3096x4128</b>", storage=django.core.files.storage.FileSystemStorage(location='C:\\Users\\datoq_000\\Desktop\\Project/app/static/img/'), upload_to=''),
        ),
    ]
