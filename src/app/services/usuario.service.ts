import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "1000769336", nombre:'juan', apellido: "hurtado", genero:"masculino", licencia: "30 dias, (99.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "4451236752", nombre:'juanita', apellido: "peters", genero:"femenino", licencia: "15 dias, (59.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "1000245378", nombre:'carolina', apellido: "luz", genero:"femenino", licencia: "30 dias, (99.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "7418758964", nombre:'camilo', apellido: "guzman", genero:"masculino", licencia: "15 dias, (59.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "7582694869", nombre:'ramirez', apellido: "luan", genero:"masculino", licencia: "30 dias, (99.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "7253874567", nombre:'susan', apellido: "smith", genero:"femenino", licencia: "15 dias, (59.000 COP)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
    {usuario: "1263584798", nombre:'edison', apellido: "agudelo", genero:"masculino", licencia: "15 dias, (59.000)",edad:"20", email:"pepe@gmail.com", ciudad:"medellín", direccion:"cra.23", fecha:"10 noviembre"},
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}

