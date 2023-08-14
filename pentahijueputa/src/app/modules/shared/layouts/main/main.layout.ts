import { Component } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.css']
})
export class MainLayout {
  faTiktok = faTiktok
  faYoutube = faYoutube
  faInstagramSquare = faInstagramSquare
}
