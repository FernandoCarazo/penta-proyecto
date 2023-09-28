import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.css']
})
export class StorePage {
  items: any[];
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    // Llama a tu servicio para obtener la lista de álbumes
    this.items = this.storeService.getAlbums();
  }
}
