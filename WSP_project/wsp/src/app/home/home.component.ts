import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewsComponent } from '../news-folder/news/news.component';
import { HeaderComponent } from '../navbars/header/header.component';

import { JournalComponent } from '../journal/journal.component';
import { SideBarComponent } from '../navbars/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet,  HeaderComponent, SideBarComponent, NewsComponent, JournalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
