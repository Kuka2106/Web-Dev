import { Component, inject } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../company';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companyService = inject(CompanyService);
  companies?: Company[];
  
  ngOnInit(){
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    })
  }
}
