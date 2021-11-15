import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ApiService } from '../../../../services/api.service';



@Component({
  selector: 'app-crearusuarioo',
  templateUrl: './crearusuarioo.component.html',
  styleUrls: ['./crearusuarioo.component.css']
})


export class CrearusuariooComponent implements OnInit {
  
  genero: any[] = ['Hombre','Mujer'];
  licencia: any[] = ['BIWEEKLY','MONTHLY']
  loading:boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder,  
              private router: Router,
              private _snackBar: MatSnackBar,
              private _api: ApiService) {
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
    fecha_nacimiento: ['', Validators.required],
    costo:['', Validators.required]
    });
   }

   

  
  ngOnInit(): void {
  }


  agregarUser(){
    this.loading = true;
    const user: Usuario = {
      id: this.form.value.cedula,
      name: this.form.value.nombre,
      lastName: this.form.value.apellido,
      age: this.form.value.edad,
      email: this.form.value.email,
      city: this.form.value.ciudad,
      address: this.form.value.direccion,
      dateOfBirth: this.form.value.fecha_nacimiento
    }

    const membership:any = 
    {
        clientId: this.form.value.cedula,
        plan: this.form.value.licencia,
        value: this.form.value.costo
    }

    this._api.getClient(user.id).subscribe(data =>
      {
        this._api.purchaseMembership(membership).subscribe(()=>
        {
          this.router.navigate(['./dashboard/usuarios'])
          this._snackBar.open('El usuario ha sido agregado', '',{
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          })
        });
      },
      (onError)=>
      {
        this._api.registerClient(user).subscribe(()=>
        {
          this._api.purchaseMembership(membership).subscribe(()=>
          {
            this.router.navigate(['./dashboard/usuarios'])
            this._snackBar.open('El usuario ha sido agregado', '',{
              duration: 6000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            })
          });
        });
      });


  }

}
