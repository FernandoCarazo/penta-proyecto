import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPage } from './pages/news/news.page';
import { NewsDetailPage } from './pages/news-detail/news-detail.page';

const routes: Routes = [

    {path: '', component: NewsPage},
    {path: ':id', component: NewsDetailPage}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
