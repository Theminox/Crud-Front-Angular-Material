import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Venta } from '../interfaces/venta';

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
  

registerClient(data:any){
  return this.http.post(`${API_URL}/clients`, JSON.stringify(data), {headers: {"content-type": "application/json"}});
}

getClient(id:String){
  return this.http.get(`${API_URL}/clients/${id}`);
}

purchaseMembership(data:any){
  return this.http.post(`${API_URL}/clients/purchase`, JSON.stringify(data), {headers: {"content-type": "application/json"}});

}

checkMembership(id:String)
{
    return this.http.get(`${API_URL}/clients/${id}/check-membership`);
}
 
}
