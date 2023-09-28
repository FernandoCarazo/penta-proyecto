import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsPage } from './pages/news/news.page';
import { NewsDetailPage } from './pages/news-detail/news-detail.page';


@NgModule({
  declarations: [
    NewsPage,
    NewsDetailPage
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
