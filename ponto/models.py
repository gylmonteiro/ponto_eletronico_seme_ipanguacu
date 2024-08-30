from django.db import models
from colaboradores.models import Colaborador

class Entrada(models.Model):
    COLABORADOR = models.ForeignKey(Colaborador, verbose_name='Colaborador')
    DATA_HORA   = models.DateTimeField(verbose_name='Data e hora')

    def __str__(self):
        return self.DATA_HORA

class Saida(models.Model):
    COLABORADOR = models.ForeignKey(Colaborador, verbose_name='Colaborador')
    DATA_HORA   = models.DateTimeField(verbose_name='Data e hora')

    def __str__(self):
        return self.DATA_HORA