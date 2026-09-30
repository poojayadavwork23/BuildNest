from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout

"""ef base(request):
    s="hello"
    return HttpResponse(s)"""


def home(request):
    return render(request, 'home.html')




def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        newuser= request.POST.get("newuser")

        user = authenticate(request, username=username, password=password, newuser=newuser)

        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            return render(request, "Ecommerce_app/login.html", {
            "error": "Invalid username or password"
        })

    return render(request, "login.html")


def logout_view(request):
    logout(request)
    return redirect("home")