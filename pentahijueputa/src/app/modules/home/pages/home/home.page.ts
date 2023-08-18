import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/services/imageSlider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage {
  slides: SlideInterface[] = [
    { url: 'assets/img/slideshow/1.png', title: 'first'},
    { url: 'assets/img/slideshow/2.png', title: 'second'},
    { url: 'assets/img/slideshow/3.png', title: 'third'},
    { url: 'assets/img/slideshow/4.png', title: 'fourth'}
  ];
}
