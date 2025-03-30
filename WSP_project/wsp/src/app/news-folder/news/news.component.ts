import { Component, inject } from '@angular/core';
import { NewsItem } from '../../models/news-item';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsService = inject(NewsService);
  newsList : NewsItem[] = this.newsService.getNewsList();
}
