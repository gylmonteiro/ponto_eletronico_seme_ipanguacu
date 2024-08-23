from django.shortcuts import render

def livre(request):
    return render(request, "ponto/livre.html")