import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news = [
    {
      id: '1',
      title:'Chivo en Muncheese',
      date: '09/09/2023',
      img1: '/assets/img/news/chivoEnMuncheee/1.jpg',
      description: 'Primer chivo de pentahijueputa con una invitada aqui estan las fotos manada de locos auuuuu'
    },
    {
      id: '2',
      title:'Pentahijueputa con Picha',
      date: '17/09/2023',
      img1: '/assets/img/news/Picha/1.jpg',      
      description: 'El par de carajillos se fueron a vaguiar a London Room a ver a Picha banda en vivo, volar pichazos y tomar guaro'   
    },

  ];

  private photos = [
    {
      newId: '1',
      photos: [
        {
        link:'/assets/img/news/chivoEnMuncheee/1.jpg'
      },
      {
        link:'/assets/img/news/chivoEnMuncheee/7.jpg'
      },
      {
        link:'/assets/img/news/chivoEnMuncheee/3.jpg'
      },
      {
        link:'/assets/img/news/chivoEnMuncheee/2.jpg'
      }
    ]
    },
    {
      newId: '2',
      photos: [
        {
        link:'/assets/img/news/Picha/1.jpg'
      },
      {
        link:'/assets/img/news/Picha/2.jpg'
      },
      {
        link:'/assets/img/news/Picha/3.jpg'
      }
    ]
    }
  ];
  constructor() { }

  getNews() {
    return this.news;
  }

getNewById(id: string) {
  return this.news.find(item => item.id === id);
}
  getPhotosForNew(newId: string) {
    const photosData = this.photos.find(data => data.newId === newId);
    return photosData ? photosData.photos : [];
  }

}
