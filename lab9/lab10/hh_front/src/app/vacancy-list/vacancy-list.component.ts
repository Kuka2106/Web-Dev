import { Component, inject } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../vacancy';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../company';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancyService = inject(VacancyService);
  companyService = inject(CompanyService);
  route = inject(ActivatedRoute)
  vacancies?: Vacancy[];
  companyId : number = 1;
  company? : Company;
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.companyId = params['id'];
    })
    this.vacancyService.getVacanciesByCompany(this.companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    })
    this.companyService.getCompanyById(this.companyId).subscribe((company)=>{
      this.company = company;
    })
  }
}
