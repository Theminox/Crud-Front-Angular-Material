import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "pepe1", nombre:'Pepe', apellido: "perez", genero:"masculino", licencia: "1 año "},
    {usuario: "pepe2", nombre:'Pepe', apellido: "perez", genero:"masculino", licencia: "1 mes"},
    {usuario: "pepe3", nombre:'Pepe', apellido: "perez", genero:"femenino", licencia: "6 meses"},
    {usuario: "pepe4", nombre:'Pepe', apellido: "perez", genero:"masculino", licencia: "2 meses"},
    {usuario: "pepe5", nombre:'Pepe', apellido: "perez", genero:"masculino", licencia: "1 año"},
    {usuario: "pepe6", nombre:'Pepe', apellido: "perez", genero:"femenino", licencia: "3 meses"},
    {usuario: "pepe7", nombre:'Pepe', apellido: "perez", genero:"masculino", licencia: "1 año"},
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

