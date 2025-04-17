import { Component, inject } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../vacancy';
import { CompanyService } from '../services/company.service';
import { Company } from '../company';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-topten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topten.component.html',
  styleUrl: './topten.component.css'
})
export class ToptenComponent {
  vacancyService = inject(VacancyService);
  companyService = inject(CompanyService);
  company? : Company;
  vacancies? : Vacancy[];
  ngOnInit(){
    this.vacancyService.getTopTen().subscribe((vacancies) => {
      this.vacancies = vacancies;
    })
  }
  getCompanyById(companyId:number){
    this.companyService.getCompanyById(companyId).subscribe((company)=>{
      this.company = company;
    })
  }
}
