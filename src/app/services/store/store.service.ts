import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private items = [
    {
      id: '1',
      title: 'Chema Héroes Nacionales',
      img: 'assets/img/tienda/frente.jpg',
      price: '₡7000 + Envío'
    },
    {
      id: '2',
      title: 'Pura vida pura muerte CD',
      img: '/assets/img/tienda/puravidaCD.jpg',
      price: '₡2500 + Envío'
    },
    {
      id: '3',
      title: 'Penta machete',
      img: '/assets/img/tienda/machete.png',
      price: '₡300.000 + Envío a caballo'
    }
  ]

  constructor() { }

  getAlbums() {
    return this.items;
  }


}
