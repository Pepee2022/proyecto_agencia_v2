import { Time } from "@angular/common";

export interface Packet {
    nombreDestino: string;
    precioDestino: number;
    hora: number;
    min: number;
}

export interface User {
    nombreUsuario: string;
}