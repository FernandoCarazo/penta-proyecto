import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscographyPage } from './pages/discography/discography.page';

const routes: Routes = [ 
  {
  path: '/discography',
  component: DiscographyPage,
  children: [
    {

    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscographyRoutingModule { }




