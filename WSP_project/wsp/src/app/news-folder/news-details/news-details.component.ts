import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsItem } from '../../models/news-item';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {

  id:number = -1;
  route = inject(ActivatedRoute);
  newsService = inject(NewsService);

  news?:NewsItem;
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.id = params['id'];
    })
    this.news = this.newsService.getNewsById(this.id);
  }
}
