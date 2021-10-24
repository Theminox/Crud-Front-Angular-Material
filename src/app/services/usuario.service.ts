import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "juan", nombre:'juan', apellido: "hurtado", genero:"masculino", licencia: "1 año, (595.000 COP)"},
    {usuario: "juanita12", nombre:'juanita', apellido: "peters", genero:"femenino", licencia: "1 mes, (50.000 COP)"},
    {usuario: "carol", nombre:'carolina', apellido: "luz", genero:"femenino", licencia: "6 meses, (295.000 COP)"},
    {usuario: "cami", nombre:'camilo', apellido: "guzman", genero:"masculino", licencia: "2 meses, (95.000 COP)"},
    {usuario: "ramirez2", nombre:'ramirez', apellido: "luan", genero:"masculino", licencia: "1 año, (595.000 COP)"},
    {usuario: "susan", nombre:'susan', apellido: "smith", genero:"femenino", licencia: "3 meses, (145.000 COP)"},
    {usuario: "edison1", nombre:'edison', apellido: "agudelo", genero:"masculino", licencia: "1 año, (595.000 COP)"},
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

