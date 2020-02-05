# Generated by Django 3.0.2 on 2020-01-28 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_skill'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=10000)),
                ('photo', models.ImageField(upload_to='img/projects/')),
                ('pub_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]