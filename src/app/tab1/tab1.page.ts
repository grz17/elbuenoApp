import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 mensajes:any[]=[];
 correo: any="";
 contra: any="";
  constructor( private servicioservice: ServicioService) { }
  ngOnInit(): void {
    this.servicioservice.getlogin(this.correo,this.contra).subscribe( (post:any=[1])=> {
     console.log(post);
     this.mensajes=post.Estatus;
     if(post.estado==false&&post.detalle[0]=="Correo o password incorrectos")
     {
      alert("Usuario O Contraseña Erroneo");
     }
     if(post.estado==true){
        document.location.href="/tabs/tab5";
       
     }
    });
    
  }


}
