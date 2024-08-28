from django.shortcuts import render

def livre(request):
    return render(request, "livre.html")

def entrada(request):

    if request.method == "POST":
        matricula = request.POST.get("matricula")

        print(matricula)
    
        # Já peguei a pessoa através da matricula
        nome = "Gabriel"
        funcao = "Instrutor"
    return render(request, "entrada.html", {'nome': nome, 'instrutor': funcao })

