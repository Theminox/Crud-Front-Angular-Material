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
  licencia: any[] = ['1 mes, (50.000 COP)', '2 meses, (95.000 COP)', '3 meses, (145.000 COP)', '6 meses, (295.000 COP)', '1 año, (595.000 COP)']
  form: FormGroup;

  constructor(private fb: FormBuilder,  
              private _usuarioService: UsuarioService, 
              private router: Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
    usuario: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    genero: ['', Validators.required],
    licencia: ['', Validators.required],
    });
   }

   

  
  ngOnInit(): void {
  }


  agregarUser(){
    

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
      licencia: this.form.value.licencia,

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
