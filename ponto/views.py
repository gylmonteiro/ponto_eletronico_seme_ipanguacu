from django.shortcuts import render

def entrada(request):
    return render(request, "ponto/entrada.html")