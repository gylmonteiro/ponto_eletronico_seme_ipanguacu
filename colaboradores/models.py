from django.db import models

# Create your models here.

class Setor(models.Model):
    NOME = models.CharField(max_length=50, verbose_name='Nome')

    def __str__ (self):
        return self.NOME

class Colaborador(models.Model):
    NOME         = models.CharField(max_length=50, verbose_name='Nome')
    FUNCAO       = models.CharField(max_length=50 ,verbose_name='Função')
    DATA_CRIACAO = models.DateField(verbose_name='Data de criação')
    SETOR        = models.ForeignKey(Setor, on_delete=models.CASCADE, verbose_name='Setor')

    def __str__(self):
        return self.NOME