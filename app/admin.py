from django.contrib import admin
from app.models import Skill, Person, Project


admin.site.register(Person)
admin.site.register(Skill)
admin.site.register(Project)

admin.site.site_header = "Administration"
admin.site.site_title = "Portfolio Site Admin"
admin.site.index_title = "Admin"