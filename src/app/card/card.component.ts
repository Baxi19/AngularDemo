import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardsInfo: Array<Item> = [{
    title: "Titulo 1",
    description: "descripcion 1 ",
    price: 10.0,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  }, {
    title: "Titulo 2",
    description: "descripcion 2 ",
    price: 200.0,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  }, {
    title: "Titulo 3",
    description: "descripcion 3 ",
    price: 85.0,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  },{
    title: "Titulo 4",
    description: "descripcion 4 ",
    price: 10000.5,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  },{
    title: "Titulo 5",
    description: "descripcion 5 ",
    price: 10000.5,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  },{
    title: "Titulo 6",
    description: "descripcion 5 ",
    price: 10000.5,
    images: ["https://www.imagen.com.mx/assets/img/imagen_share.png", "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg"]

  }]
  constructor() { }

  ngOnInit(): void {
  }

}
