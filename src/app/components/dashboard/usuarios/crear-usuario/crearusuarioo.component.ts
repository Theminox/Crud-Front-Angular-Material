import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';



@Component({
  selector: 'app-crearusuarioo',
  templateUrl: './crearusuarioo.component.html',
  styleUrls: ['./crearusuarioo.component.css']
})


export class CrearusuariooComponent implements OnInit {
  
  genero: any[] = ['Hombre','Mujer'];
  licencia: any[] = ['15 dias, (59.000)','30 dias, (99.000)']
  form: FormGroup;

  constructor(private fb: FormBuilder,  
              private _usuarioService: UsuarioService, 
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    genero: ['', Validators.required],
    licencia: ['', Validators.required],
    edad: ['', Validators.required],
    email: ['', Validators.required],
    direccion: ['', Validators.required],
    ciudad: ['', Validators.required],
    fecha: ['', Validators.required]
    });
   }

   

  
  ngOnInit(): void {
  }


  agregarUser(){
    

    const user: Usuario = {
      cedula: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
      licencia: this.form.value.licencia,
      edad: this.form.value.edad,
      email: this.form.value.email,
      ciudad: this.form.value.ciudad,
      direccion: this.form.value.direccion,
      fecha: this.form.value.fecha

    }

    
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['./dashboard/usuarios'])
    this._snackBar.open('El usuario ha sido agregado', '',{
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

}
