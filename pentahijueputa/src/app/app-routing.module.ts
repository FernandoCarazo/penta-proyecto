import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '@shared/layouts/main/main.layout';


const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        /*CAMBIAR POR PAGINA DE FOTOS */
        loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
      }
      ,
      {
        path: 'tienda',

        loadChildren: () => import('@store/store.module').then(m => m.StoreModule)
      },
      {
        path: 'discografia',

        loadChildren: () => import('@discography/discography.module').then(m => m.DiscographyModule)
      },
      {
        path: 'noticias',

        loadChildren: () => import('@news/news.module').then(m => m.NewsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
