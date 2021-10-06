import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "pepe1", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe2", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe3", nombre:'Pepe', apellido: "perez", genero:"femenino"},
    {usuario: "pepe4", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe5", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe6", nombre:'Pepe', apellido: "perez", genero:"femenino"},
    {usuario: "pepe7", nombre:'Pepe', apellido: "perez", genero:"masculino"},
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
}

