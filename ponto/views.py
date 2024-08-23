from django.shortcuts import render

def livre(request):
    return render(request, "ponto/livre.html")

def entrada(request):
    return render(request, "ponto/entrada.html")