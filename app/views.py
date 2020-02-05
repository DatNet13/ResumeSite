from django.shortcuts import render, redirect, get_object_or_404
from app.models import Skill, Person, Project
from django.http import HttpResponse
from django.contrib.gis.geoip2 import GeoIP2
from datetime import date


# Region Detector Function
def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    elif request.META.get('HTTP_X_REAL_IP'):
        ip = request.META.get('HTTP_X_REAL_IP')
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


# Index Page Content
def index(request):
    # Region Detection By Public Ip Address
    ip = get_client_ip(request)
    g = GeoIP2()
    try:
        if g.city(ip):
            country = g.city(ip)
            if(country):
                country_name = country["country_name"]
                city_name = country["city"]
                if (country_name == "Georgia" or country_name == "georgia" or city_name == "Tbilisi" or city_name == "tbilisi"):
                    return redirect("ge")
                else:
                    return redirect("en")
            else:
                return redirect("en")
    except:
        return redirect('en')
    return redirect("en")


# English Site Content
def en(request):
    projects = Project.objects.order_by("-pk")
    me = Person.objects.all().last()
    all_skill = Skill.objects.order_by("-progress")
    length = all_skill.count()
    today = date.today()
    # Age Logic
    birthDate = me.birth_date
    age = today.year - birthDate.year - ((today.month, today.day) < (birthDate.month, birthDate.day))
    # Fullname Logic
    full_name = me.first_name.strip() + ' ' + me.last_name.strip()

    context = {
        'skills': all_skill,
        'me': me,
        'length': length,
        'age': age,
        'full_name': full_name,
        'projects': projects
    }
    return render(request, 'en.html', context)


# Georgian Site Content
def ge(request):
    projects = Project.objects.order_by("-pk")
    me = Person.objects.all().last()
    all_skill = Skill.objects.order_by("-progress")
    length = all_skill.count()
    today = date.today()
    # Age Logic
    birthDate = me.birth_date
    age = today.year - birthDate.year - ((today.month, today.day) < (birthDate.month, birthDate.day))
    # Fullname Logic
    full_name = me.first_name_ge.strip() + ' ' + me.last_name_ge.strip()

    context = {
        'skills': all_skill,
        'me': me,
        'length': length,
        'age': age,
        'full_name': full_name,
        'projects': projects
    }
    return render(request, 'ge.html', context)