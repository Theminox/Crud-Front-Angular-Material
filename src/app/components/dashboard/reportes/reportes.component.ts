import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import  autoTable  from 'jspdf-autotable';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private _api:ApiService) { }

  doc:any = new jsPDF();
  loading:boolean = false;

  ngOnInit(): void {
  }


  downloadPDF()
  {
    this.loading = true;
    this.doc.text("VENTAS DE SCHOOL GYM", 10,10);
    this._api.getSales().subscribe((response:any)=>
    {
      this.loading = false;
      console.log(response.map((venta:any)=>[venta.client.id, venta.client.name, venta.client.lastName, venta.client.dateOfBirth,
        venta.plan + ' ($' + venta.value + ')', venta.client.age, venta.client.email, venta.client.city,
      venta.client.address, venta.membership.purchased_date]));
      autoTable(this.doc,{
        head: [['Cedula', 'Nombre', 'Apellido', 'fecha_nacimiento', 'Licencia','Edad', 'Email', 'Ciudad', 'Direccion', 'Fecha']],
        body: response.map((venta:any)=>[venta.client.id, venta.client.name, venta.client.lastName, venta.client.dateOfBirth,
          venta.plan + ' ($' + venta.value + ')', venta.client.age, venta.client.email, venta.client.city,
        venta.client.address, venta.membership.purchased_date])
      });

      this.doc.save("ventas schoolgym.pdf");
    })

  }
}
