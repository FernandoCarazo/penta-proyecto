import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pentahijueputa';

  images = [
    {
      imageSrc:
        '/assets/img/slideshow/1.png',
        imageAlt: '1'
    },
    {
      imageSrc:
        '/assets/img/slideshow/2.png',
        imageAlt: '3'
    },
    {
      imageSrc:
        '/assets/img/slideshow/3.png',
        imageAlt: '3'
    },
    {
      imageSrc:
        '/assets/img/slideshow/4.png',
        imageAlt: '4'
    },

  ]
}
