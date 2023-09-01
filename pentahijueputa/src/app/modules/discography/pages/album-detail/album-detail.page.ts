import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.css']
})
export class AlbumDetailPage {
  faAmazon = faAmazon;
  faSpotify = faSpotify;
  album: any; // Estructura de datos para el álbum
  songList: any;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    // Llama a tu servicio para obtener los detalles del álbum por ID
    this.album = this.albumService.getAlbumById(albumId);
    this.songList = this.albumService.getSongListForAlbum(albumId);
  }
}
