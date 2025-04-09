from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status 
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Company, Vacancy
from .serializer import VacancySerializer, CompanySerializer

class CompanyListView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailView(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'pk'

@api_view(['GET'])
def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_vacancy_details(request, pk):
    vacancy = Vacancy.objects.get(pk=pk)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def get_vacancies_by_company(request, pk):
    company = Company.objects.get(pk=pk)
    vacancies = Vacancy.objects.filter(company=pk)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_vacancies_by_company(request, pk):
    company = Company.objects.get(pk=pk)
    vacancies = Vacancy.objects.filter(company=pk)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary') 
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
def create_company(request):
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def create_vacancy(request):
    serializer = VacancySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
