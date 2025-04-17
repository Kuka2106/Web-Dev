import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://127.0.0.1:8000/api/'; 
  private vacancyUrl = 'http://127.0.0.1:8000/api/vacancies/'; 
  constructor(private http: HttpClient) {}

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}companies/${companyId}/vacancies`);
  }
  getTopTen(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.vacancyUrl}top_ten`);
  }
}
