import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    listUsuarios: Usuario[] = [
    {usuario: "pepe1", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe2", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe3", nombre:'Pepe', apellido: "perez", genero:"femenino"},
    {usuario: "pepe4", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe5", nombre:'Pepe', apellido: "perez", genero:"masculino"},
    {usuario: "pepe6", nombre:'Pepe', apellido: "perez", genero:"femenino"},
    {usuario: "pepe7", nombre:'Pepe', apellido: "perez", genero:"masculino"},
  ];

  displayedColumns: string[] = ['Usuarios', 'Nombre', 'Apellido', 'Genero', 'Acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
