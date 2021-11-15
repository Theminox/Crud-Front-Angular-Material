import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,  
              private router: Router,
              private _snackBar: MatSnackBar,
              private _api: ApiService) {
    this.form = this.fb.group({
    cedula: ['', Validators.required],
    licencia_id: ['', Validators.required],
    estado: ['', Validators.required],
    fecha_compra: ['', Validators.required],
    fecha_expiracion: ['', Validators.required]
    });
   }
   membership:any = "";

   comprobarMembresia()
   {


     this.membership = "Cargando...";
     this._api.checkMembership(this.form.value.cedula).subscribe((response)=>
     {
        this.membership = response;
        this.form.setValue({ 
          ...this.form.value,   
          licencia_id: this.membership.id,
          estado: this.membership.status,
          fecha_compra: this.membership.purchased_date,
          fecha_expiracion:this.membership.expiration_date
        });
     },
     (onError)=>
     {
        this.membership = "Este cliente no cuenta con una membresia activa";  
     })
   }

  ngOnInit(): void {
  }

}
