import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscographyRoutingModule } from './discography-routing.module';
import { DiscographyPage } from './pages/discography/discography.page';
import { AlbumDetailPage } from './pages/album-detail/album-detail.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    DiscographyPage,
    AlbumDetailPage
  ],
  imports: [
    CommonModule,
    DiscographyRoutingModule,
    FontAwesomeModule
  ]
})
export class DiscographyModule { }
