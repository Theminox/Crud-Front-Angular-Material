import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL:String = 'https://schoolgym.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class ApiService {


  cliente = '';
  membresia = '';
  clientepost = '';
  membresiapost = '';
  
  ngOnInit() {
    }

  constructor(private http: HttpClient) { }
  
  getSales(){
    return this.http.get(`${API_URL}/sales`);
  }
  
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
