import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrearService {

  cliente = '';
  membresia = '';
  historial = '';
  clientepost = '';
  membresiapost = '';
  
  ngOnInit() {
    this.Cliente();
    this.Membresia();
    this.Historial();
    this.ClientePost();
    this.MembresiaPost();
    }

  constructor(private http: HttpClient) { }

  
  Cliente(){
    this.http.get('https://schoolgym.herokuapp.com/cliente').subscribe(
    (resp:any) => {
    this.cliente = resp;
  }),
  (error: any) =>{
    console.log(error);
  }
  }

  Membresia(){
    this.http.get('https://schoolgym.herokuapp.com/membresia').subscribe(
      (resp: any) => {
       this.membresia = resp;
      }),
      (error: any) =>{
        console.log(error);
      }
  }
  
Historial(){
  this.http.get('https://schoolgym.herokuapp.com/historial').subscribe(
    (resp: any) => {
     this.historial = resp;
    }),
    (error: any) =>{
      console.log(error);
    }
}

ClientePost(){
  this.http.post('https://schoolgym.herokuapp.com/cliente', {title: 'cliente post'}).subscribe(
    (resp: any) => {
     this.clientepost = resp;
    }),
    (error: any) =>{
       console.log(error);
    }
}

MembresiaPost(){
  this.http.post('https://schoolgym.herokuapp.com/membresia', {title: 'membresia post'}).subscribe(
    (resp: any) => {
     this.membresiapost = resp;
    }),
    (error: any) =>{
       console.log(error);
    }
}
 

}
