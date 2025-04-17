import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companiesUrl = 'http://127.0.0.1:8000/api/companies';
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }
  getCompanyById(companyId: number): Observable<Company>{
    return this.http.get<Company>(`${this.companiesUrl}/${companyId}`);
  }
}
