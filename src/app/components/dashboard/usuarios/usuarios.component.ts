import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';
import { ApiService } from '../../../services/api.service';
import { Venta } from '../../../interfaces/venta';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  listUsuarios: any=[];
  ventas: any = [];
  loading:boolean = false;

  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'fecha_nacimiento', 'Licencia','Edad', 'Email', 'Ciudad', 'Direccion', 'Fecha'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _apiService: ApiService ,  
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.loading = true;
    this._apiService.getSales().subscribe(response =>
      {
        this.ventas = response;
        this.dataSource = new MatTableDataSource(this.ventas);
        this.loading = false;
      });
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

    this.cargarUsuarios();

    this._snackBar.open('El usuario ha sido eliminado', '',{
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })

  }
}
