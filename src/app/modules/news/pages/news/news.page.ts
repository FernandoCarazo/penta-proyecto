import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.css']
})
export class NewsPage {
news: any[];
constructor(private newsService: NewsService) { }

ngOnInit(): void {
  // Llama a tu servicio para obtener la lista de álbumes
  this.news = this.newsService.getNews();
}
}
