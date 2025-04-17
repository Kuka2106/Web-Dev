import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { ToptenComponent } from './topten/topten.component';

export const routes: Routes = [
    {path : "", component: CompanyListComponent},
    {path : "companies/:id/vacancies", component: VacancyListComponent},
    {path: "topten", component :  ToptenComponent}
];
