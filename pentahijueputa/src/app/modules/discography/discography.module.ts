import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscographyRoutingModule } from './discography-routing.module';
import { DiscographyPage } from './pages/discography/discography.page';


@NgModule({
  declarations: [
    DiscographyPage
  ],
  imports: [
    CommonModule,
    DiscographyRoutingModule
  ]
})
export class DiscographyModule { }
