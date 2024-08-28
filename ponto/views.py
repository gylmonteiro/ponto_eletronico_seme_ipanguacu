from django.shortcuts import render

def livre(request):
    return render(request, "livre.html")

def entrada(request):

    if request.method == "POST":
        matricula = request.POST.get("matricula")
        print(matricula)
    return render(request, "entrada.html")
    return render(request, "ponto/livre.html")

