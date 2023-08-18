import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '@shared/layouts/main/main.layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'tienda',
        /*CAMBIAR POR PAGINA DE FOTOS */
        loadChildren: () => import('@store/store.module').then(m => m.StoreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
