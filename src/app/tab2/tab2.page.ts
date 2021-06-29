import { Component } from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
mensajes:any[]=[];
 apellido: any="";
 nombre: string="";
 username:string="";
 correo: any="";
 contra: any="";
 rpassword: string="";
  constructor( private servicioservice: ServicioService) { }
  ngOnInit(): void {
    this.servicioservice.getnuevo(this.apellido,this.nombre,this.username,this.correo,this.contra,this.rpassword).subscribe( (post:any)=> {
     console.log(post);
     this.mensajes=post.Estatus;
     if(post.estado==false&&post.detalle[0]=="Correo o password incorrectos")
     {
      alert("Usuario O Contraseña Erroneo");
     }
     if(post.estado==true){
        document.location.href="/tabs/tab1";
       
     }
    });
    
  }

}
