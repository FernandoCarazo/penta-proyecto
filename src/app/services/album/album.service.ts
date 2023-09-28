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
    spotify: 'https://open.spotify.com/album/4p2kft2psAQZZ4KUNwZFoC?si=zi7leUSLRladsYIuOkOLKA',
    review:'Yugensillo reseña: Con este disco los jóvenes se dieron a conocer a una Costa Rica que desconocía completamente lo que estaba apunto de presenciar héroes nacionales sin duda es uno de los mejores trabajos debut de una de las mejores bandas ticas sin embargo debemos de decir que su sonido no es el mejor aunque teniendo en cuenta las latas donde vivimos los costarricenses no me extraña que tenga sonido de matadero de gallinas 10/10 IGN'
  },
    
  { id: '2', 
    title: 'Culebra Cobra', 
    year: 2023, 
    img: '/assets/img/discografia/culebra.jpg',
    amazon: 'https://www.amazon.com/dp/B0CF4VQB2R/ref=sr_1_1?crid=BUOGJNFTYN50&keywords=pentahijueputa&marketplaceId=ATVPDKIKX0DER&musicTerritory=US&qid=1693517740&sprefix=pentahijueputa%2Caps%2C138&sr=8-1&trackAsin=B0CF4VQB2R',
    spotify: 'https://open.spotify.com/album/4p2kft2psAQZZ4KUNwZFoC?si=zi7leUSLRladsYIuOkOLKA',
    review: 'Yugensillo reseña: Sinceramente se nota la evolución musicalmente que ha tenido esta banda, la ejecución musical de esta pieza es sencillamente incomparable a su anterior trabajo, se nota el empeño que se le ha otorgado crónicamente a este nuevo sencillo, el cual me ha dejado realmente con la boca abierta de lo genial que es, 10/10 IGN'
  },

  { id: '3', 
    title: 'Pura vida pura muerte', 
    year: 2023,
    img: '/assets/img/discografia/puravida.jpg' ,
    amazon: 'https://www.amazon.com/dp/B0CJBJ9Y2C/ref=sr_1_1?crid=2H16VL7VXN6ZK&keywords=pentahijueputa&qid=1695257588&sprefix=pentahijueputa%2Caps%2C147&sr=8-1',
    spotify: 'https://open.spotify.com/album/0C5ohoEuH7awi7bDjsXKVx?si=pAZv36I6Qm-7TwzeA60LAQ',
    review: 'Yugensillo reseña: Es para mí un agrado anunciar que pentahijueputa ha sacado uno de uno de los mejores álbumes que podemos escuchar en este 2023, una de las obras de arte más costarricenses y poderosas que podemos apreciar en esta época sin duda el metal costarricense ha llegado a un punto de epítome total en el que podemos ver nuevas bandas surgiendo y llegando a lugares que no nos podemos imaginar, con este álbum se va a notar la gran habilidad que tienen estos muchachos para crear música que no se rompa los tímpanos y que amemos con todo nuestro ser 10/10 IGN'

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
            lyrics: 'Poco de engañados \n Se creen la gran picha\nBusquenme hijueputas para unos pichasos\n\nMi nombre es Luis Barquero\nAndo por San Vito\nSi me ve en carretera mandese unos pichacitos\n\nPoco de hijueputas\nLos voy a pichasear\nEl guaro me sabe a leche\nLos voy a machetear\nPoco de malparidos'
      },
      {
        number: 2,
        title: 'Gato Hijueputa',
        lyrics: 'Gato malparido\nSe me comió la moncha\nUn cabo de tepezcuintle que había dejado aquí\n\nHijueputa animal del diablo\n con lo que no me cuesta a mi ir a montear\nA este hijueputa lo voy a matar\n\nJueputa gato se me comió la vara\nGato carepicha lo voy a vender al chino hijueputa\nGato carepicha'
      },
      {
        number: 3,
        title: 'Se me encogió el banano',
        lyrics: 'Jueputa feminazi\nMe escupió la jacha\nYo le meti un pichazo\nY le quebré la jeta\n\nDespués vino otra hijueputa\nMaldita tortillera\nYo me cago en tu abuela\nVea a ver quien la culea'
      },
      {
        number: 4,
        title: 'Jimena Carepicha',
        lyrics: 'Jimena Carepicha\nCarepicha Jimena\nJimena carepicha\nCarepicha Jimena\nJimena carepicha\nJimena carepicha'
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
        lyrics: 'Te ves al espejo y quedas perplejo\nVes a tu abuela volando rejo\nDe cuatro patas en el azulejo\nVolando culo con Gabelo Conejo\nCuando ves esa vara bajas el switch\nAhora la pisa Richard Smith\nPara ver quien sigue entre pares y nonis\n\nMe cago en lonnis\nLonnis hijueputa\nLonnis me cago en tu madre\nLonnis malparido\n\nTe ves en el piso y quedas obciso\nTe ha culeado a Joseph Miso\nTu abuela quería con Pablo Chinchilla\nPero la picha muy chiquitilla\nTambién quería con Guimarães\nPero a ese playo lo pisan un poco de maes\n\nMe cago en Lonnis\n\nLonnis hijueputa\nLonnis malparido\nLonnis tu madre es una perra\nLonnis tu madre es una perra\n\nMario Segura se lo culea\nMario Segura se lo culea\n\nMario Segura se lo culea\nSe lo culea'
      }
      ]
    },
    {
      albumId: '2',
      songs: [
        {
          number: 1,
            title: 'Culebra cobra',
            lyrics: 'Ahora si hijueputas\nTengo el diablo metido\nUna culebra cobra\nVeala que real\n\nEn mis intestinos\nY en mi garganta\nVeala que real\n\nTengo el diablo metido adentro\nCulebra cobra'
          },            
    ]
    },
    {
      albumId: '3',
      songs: [
        {
          number: 1,
            title: 'Culebra cobra',
            lyrics: 'Ahora si hijueputas\nTengo el diablo metido\nUna culebra cobra\nVeala que real\n\nEn mis intestinos\nY en mi garganta\nVeala que real\n\nTengo el diablo metido adentro\nCulebra cobra'
          },   
          {
            number: 2,
              title: 'Violencia doméstica',
              lyrics: 'Busqueme\nPajoso\nRoco Mentiroso\n\nLlegó un hombre cinta azul\nSi no le dan visa\nYo voy a buscalo\nPa pichasealo\n\nAhora sí\nViolencia doméstica\nEl hombre de américa\n\nBusqueme hp\nTengo también el tiro del dragón\n\nPAAAAA'
            },   
            {
              number: 3,
                title: 'La muela cariada',
                lyrics: 'Chale\nPele ojo\nAhi le va uno picon picon\n\nUna fiesta de disfraces\nMuchos menecos\nPor ahi anda caperucita\nY harry potter\n\nDe que viene ese meneca\nNo se entiende el disfraz\nToda desnuda\nY pintada de blanco\n\nTodos perplejos\nNo se sabe de que viene\n\nDe que viene ese meneca\nNo se entiende el disfraz\nToda desnuda\nY pintada de blanco\n\nCuando llega el juez\nLe dice y uste e q viene\nAlza la pata la meneca \nY dice\nDe muela cariada'
                
              }, 
              {
                number: 4,
                  title: 'Cartago ha muerto',
                  lyrics: 'Cartago\nSe fue\nA la mierda\nYa no hay\nDonde tencha\n\nMe cago\nEn la puta\nQue me parió'                  
                }, 
                {
                  number: 5,
                    title: 'Vieja payasa',
                    lyrics: 'A donde estas\nJueputa cochinada\nQue manera de llamar\nQue hijueputa Shirley\nVa agarre de mona a su abuela\nQue modito de contestar\nHijueputa pasada de payasa\nComo me cae de mal\nJueputa mongola\nJueputa vieja pasada de payasa\nJueputa vieja pasada de payasa'
              
                  }, 
                  {
                    number: 6,
                      title: 'Dejen bretiar',
                      lyrics: 'Poco de vagos\nDejenme breatiar\nNo tienen nada q hacer\nPoco de hps\nYo no me meti a este grupo de picha\n\nQ algun malparido me saque de aqui\nEsta en una sonadera este gajo\nMe lo van a joder\nMe tienen malo con esa mandadera de pelos\n\nVayan a lavarse el culo\nY a buscar oficio\nPoco de carepichas vagos\nMe cago en sus madres hijueputas\n\nJueputa sonadera este telefono\nMe van a despedir del brete\nPor culpa de uds hps\nNo saben lo q es ganarse un cinco\n\nPoco de vagabundos\ntodo lo quieren regalado\nSaquenme de este grupo de pinga\ncalmen la vara hijueputas\n\nDejen bretiar'

                    }, 
                    {
                      number: 7,
                        title: 'No me tomé la fluoxetina',
                        lyrics: 'Cartago\nSe fue\nA la mierda\nYa no hay\nDonde tencha\n\nMe cago\nEn la puta\nQue me parió'                  
                      }, 
                      {
                        number: 8,
                          title: 'La barba me huele a panoxo',
                          lyrics: 'La barba me huele a panocho\nAroma espectacular\nNo puedo disimular\nQue vengo de culiar\nPorque la barba me huele a panocho\nAroma espectacular\nNo puedo disimular\nQue vengo de culiar\n\nLa barba me huele a panocho\nLa barba me huele a panocho\nLa barba me huele a panocho'
                        }, 

    ]
    }
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
