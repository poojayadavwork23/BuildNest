from django.shortcuts import render
from django.http import HttpResponse

"""ef base(request):
    s="hello"
    return HttpResponse(s)"""

def home(request):
    return render(request, 'home.html')