import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private baseUrl = 'http://127.0.0.1:8000/api/'; 

  constructor(private http: HttpClient) {}

  getVacanciesByCompany(companyId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}companies/${companyId}/vacancies`);
  }
}
