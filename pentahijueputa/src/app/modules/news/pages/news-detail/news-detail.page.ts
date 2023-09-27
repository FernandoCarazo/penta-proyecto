import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.css']
})
export class NewsDetailPage {
  news: any[];
  new: any;
  photos:any[];

  constructor(
    private route: ActivatedRoute,
    private newsService : NewsService
  ) { }
  ngOnInit(): void {
    // Llama a tu servicio para obtener la lista de álbumes
    const newId = this.route.snapshot.paramMap.get('id');
    this.news = this.newsService.getNews();
    this.photos = this.newsService.getPhotosForNew(newId);
    this.new = this.newsService.getNewById(newId);
  }
  }
  
