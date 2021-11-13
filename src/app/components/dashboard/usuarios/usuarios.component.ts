import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';
import { ApiService } from '../../../services/ApiService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[]=[];

  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Genero', 'Licencia','Edad', 'Email', 'Ciudad', 'Direccion', 'Fecha', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _apiService: ApiService ,private _usuarioService: UsuarioService,  
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this._apiService.getSales().subscribe((data)=>
    {
      /*this.listUsuarios = [
        {
            cedula: data.client.id,
            nombre: data.client.name,
            apellido: data.client.lastName,
            genero: "",
            licencia: data.membership.status,
            edad: data.membership.status,
            email: data.membership.status,
            ciudad: data.membership.status,
            direccion: data.membership.status,
            fecha: data.membership.status
        }
      ]*/
      console.log(data);
    });
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
  eliminarUsuario(index: number){
    console.log(index)

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('El usuario ha sido eliminado', '',{
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })

  }
}
