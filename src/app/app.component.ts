import { Component } from '@angular/core';
import {Packet as Packet1} from './model/packet.model';
import {Packet as Packet2} from './model/packet.model';
import {Packet as Packet3} from './model/packet.model';
import {User as user} from './model/packet.model';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

//Componentes generales
export class AppComponent {
  title = 'proyecto_agencia_v2';
  packet1: Packet1[] = [
    {
      nombreDestino: "Machupicchu",
      precioDestino: 550,
      duracionDias: 4,
      duracionNoches: 3
    }
  ];
  packet2: Packet2[] = [
    {
      nombreDestino: "Valle Sagrado",
      precioDestino: 450,
      duracionDias: 3,
      duracionNoches: 2
    }
  ];
  packet3: Packet3[] = [
    {
      nombreDestino: "Monataña de 7 colores",
      precioDestino: 330,
      duracionDias: 2,
      duracionNoches: 1
    }
  ];

  //Nombre de usuario
  user: user[] = [
    {
      nombreUsuario: "Franck",
    }
  ]
}
