import { Injectable ,Output} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http: HttpClient) {}

   getcomidas(){
    return this.http.get('https://servicioema.herokuapp.com/servicios/comidas');
  }
  getlogin(correo: any,contrasena:any):
  Observable<any> 
  {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://servicioema.herokuapp.com/servicios/login',"&mail="+correo+"&password="+contrasena,{headers: headers});
  }

   getnuevo(apellidos:any,nombre:any,username:any,correo: any,contrasena:any, rpassword: any):
  Observable<any> 
  {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://servicioema.herokuapp.com/servicios/nuevoUsuario',"&apellidos="+apellidos+ "&nombre="+nombre+ "&username="+username+ "&mail="+correo+"&password="+contrasena+"&rpassword="+rpassword,{headers: headers});
  }
}
