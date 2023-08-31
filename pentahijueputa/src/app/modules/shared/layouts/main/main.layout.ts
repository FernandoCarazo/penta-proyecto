import { Component, HostListener } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.css']
})
export class MainLayout {
  faTiktok = faTiktok
  faYoutube = faYoutube
  faInstagram = faInstagram;
  faSpotify = faSpotify;
  faCalendar = faCalendar;

  // navbarfixed:boolean = false;
  // @HostListener('window:scroll', ['$event']) onscroll(){
  //   if(window.scrollY > 100)
  //   {
  //     this.navbarfixed = true
  //   }
  //   else{
  //     this.navbarfixed = false;
  //   }
  // }
  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100; // Adjust the threshold as needed
  }

}
