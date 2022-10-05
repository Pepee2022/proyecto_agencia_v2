import { Component, TemplateRef } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {Packet as Packet1} from './model/packet.model';
import {Packet as Packet2} from './model/packet.model';
import {Packet as Packet3} from './model/packet.model';
import {User as user} from './model/packet.model';


@Component({
  selector: 'app-root, demo-timepicker-basic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

//Componentes generales
export class AppComponent {
  title = 'proyecto_agencia_v2';
  //Constructor Modal
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  packet1: Packet1[] = [
    {
      nombreDestino: "Machupicchu",
      precioDestino: 550,
      hora: 2,
      min: 0,
    }
  ];

  packet2: Packet2[] = [
    {
      nombreDestino: "Valle Sagrado",
      precioDestino: 450,
      hora: 5,
      min: 0,
    }
  ];

  packet3: Packet3[] = [
    {
      nombreDestino: "Monataña de 7 colores",
      precioDestino: 330,
      hora: 4,
      min: 0,
    }
  ];

  //Nombre de usuario
  user: user[] = [
    {
      nombreUsuario: "Franck",
    }
  ];
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  mytime: Date = new Date();
}
