import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscographyPage } from './pages/discography/discography.page';
import { AlbumDetailPage } from './pages/album-detail/album-detail.page';

const routes: Routes = [ 
  { path: '', component: DiscographyPage }, // Matches '/discography'
  { path: ':id', component: AlbumDetailPage }, // Matches '/discography/:id'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscographyRoutingModule { }




