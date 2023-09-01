// album.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albums = [
    { id: '1', 
    title: 'Héroes Nacionales', 
    year: 2023, 
    img: '/assets/img/discografia/heroes.jpg',
    amazon: 'https://www.amazon.com/dp/B0CB78NQ26/ref=sr_1_8?crid=BUOGJNFTYN50&keywords=pentahijueputa&qid=1693517633&sprefix=pentahijueputa%2Caps%2C138&sr=8-8',
    spotify: 'https://open.spotify.com/album/4p2kft2psAQZZ4KUNwZFoC?si=zi7leUSLRladsYIuOkOLKA'
  },
    
  { id: '2', 
    title: 'Culebra Cobra', 
    year: 2023, 
    img: '/assets/img/discografia/culebra.jpg',
    amazon: 'https://www.amazon.com/dp/B0CF4VQB2R/ref=sr_1_1?crid=BUOGJNFTYN50&keywords=pentahijueputa&marketplaceId=ATVPDKIKX0DER&musicTerritory=US&qid=1693517740&sprefix=pentahijueputa%2Caps%2C138&sr=8-1&trackAsin=B0CF4VQB2R',
    spotify: 'https://open.spotify.com/album/4p2kft2psAQZZ4KUNwZFoC?si=zi7leUSLRladsYIuOkOLKA',
  },

  { id: '3', 
    title: 'Pura Vida Pura Muerte', 
    year: 2023,
    img: '/assets/img/discografia/puravida.jpg' ,
    amazon: 'https://www.amazon.com/dp/B0CF4VQB2R/ref=sr_1_1?crid=BUOGJNFTYN50&keywords=pentahijueputa&marketplaceId=ATVPDKIKX0DER&musicTerritory=US&qid=1693517740&sprefix=pentahijueputa%2Caps%2C138&sr=8-1&trackAsin=B0CF4VQB2R',
    spotify: 'https://open.spotify.com/album/4p2kft2psAQZZ4KUNwZFoC?si=zi7leUSLRladsYIuOkOLKA',

  },

    // Agrega más álbumes aquí
  ];

  private songLists = [
    {
      albumId: '1',
      songs: [
        {
            number: 1,
            title: 'El gallo del sur',
            lyrics: 'Poco de engañados\nSe creen la gran picha\nBusquenme hijueputas para unos pichasos\nMi nombre es Luis Barquero\nAndo por San Vito\nSi me ve en carretera mandese unos pichacitos\nPoco de hijueputas\nLos voy a pichasear\nEl guaro me sabe a leche\nLos voy a machetear\nPoco de malparidos'
      },
      {
        number: 2,
        title: 'Gato Hijueputa',
        lyrics: 'Gato malparido\nSe me comió la moncha\nUn cabo de tepezcuintle que había dejado aquí\nHijueputa animal del diablo con lo que no me cuesta a mi ir a montear\nA este hijueputa lo voy a matar\n\nJueputa gato se me comió la vara\nGato carepicha lo voy a vender al chino hijueputa\nGato carepicha'
      },
      {
        number: 3,
        title: 'Se me encogió el banano',
        lyrics: 'Se me encogió el banano\nJueputa feminazi\nme escupio la jacha\nyo le meti un pichaso\ny le quebre la jeta\n\nDespues vino otra hijueputa\nMaldita tortillera\nYo me cago en tu abuela\nvea a ver quien la culea'
      },
      {
        number: 4,
        title: 'Jimena Carepicha',
        lyrics: 'Jimena Carepicha\nCarepicha Jimena\n\nJimena carepicha\n\nCarepicha Jimena\n\nJimena carepicha\n\nJimena carepicha'
      },
      {
        number: 5,
        title: 'Jueputas regaetoneros',
        lyrics: 'Jueputas regaetoneros\nJueputas reguetoneros\nComo juegan de malvados\nPero son bien aplayados bien que les cuadra el banano\n\nPuta música de mierda que viva el heavy metal\nVayan a que se las metan\nMetasen el dedo en el culo hijueputas'
      },
      {
        number: 6,
        title: 'Carro de wasap',
        lyrics: 'Carro de wasap'
      },
      {
        number: 7,
        title: 'La perdí cuando más la amaba',
        lyrics: 'La perdí cuando más la amaba\nJueputa\n\nLa perdi mae\n\nLa perdi cuando más la amaba\n\nCarlos\n\nEstoy llorando Carlos\n\nQue picha'
      },
      {
        number: 8,
        title: 'Me cago en Lonnis',
        lyrics: 'Me cago en Lonnis\nTe ves al espejo y quedas perplejo\nVes a tu abuela volando rejo\nDe cuatro patas en el azulejo\nVolando culo con Gabelo Conejo\nCuando ves esa vara bajas el switch!!\nAhora la pisa Richard Smith\nPara ver quien sigue entre pares y nonis\n\nME CAGO EN LONNIS !!!\n\nLONNIS HIJUEPUTA...\nLONNIS ME CAGO EN TU MADRE\nLONNIS MALPARIDO\n\nTe ves en el piso y quedas obciso\nTe ha culeado a Joseph Miso\nTu abuela quería con Pablo Chinchilla\nPero la picha muy chiquitilla\nTambién quería con Guimarães\nPero a ese playo lo pisan un poco de maes\n\nME CAGO EN LONNIS !!!\n\nLONNIS HIJUEPUTA...\nLONNIS MALPARIDO\nLONNIS TU MADRE ES UNA PERRA\nLONNIS TU MADRE ES UNA PERRA\n\nMario Segura se lo culea\nMario Segura se lo culea\n\nMARIO SEGURA SE LO CULEA\nSE LO CULEA!!!'
      }
      ]
    },
    {
      albumId: '2',
      songs: [
        {
          number: 1,
            title: 'Culebra cobra',
            lyrics: 'Culebra cobra\nAhora si hijueputas\nTengo el diablo metido\nUna culebra cobra\nVeala que real\n\nEn mis intestinos\nY en mi garganta\nVeala que real\n\nTengo el diablo metido adentro\nCulebra cobra'
          },            
    ]
    },
    // Add song lists for other albums
  ];
 
  constructor() { }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(id: string) {
    return this.albums.find(album => album.id === id);
  }
  
  getSongListForAlbum(albumId: string) {
    const songListData = this.songLists.find(data => data.albumId === albumId);
    return songListData ? songListData.songs : [];
  }

}
