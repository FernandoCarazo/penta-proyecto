// album-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album/album.service'; 


@Component({
  selector: 'app-album-list',
  templateUrl: './discography.page.html',
  styleUrls: ['./discography.page.css']
})
export class DiscographyPage implements OnInit {
  albums: any[]; // Tu estructura de datos de álbumes

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    // Llama a tu servicio para obtener la lista de álbumes
    this.albums = this.albumService.getAlbums();
  }
}