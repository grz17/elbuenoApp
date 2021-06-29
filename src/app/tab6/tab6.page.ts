import { Component, OnInit,Input} from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';
@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  mensajes:any[]=[];
   mensajes1:any[]=[];
    mensajes2:any[]=[];
     mensajes3:any[]=[];
      mensajes4:any[]=[];
       mensajes5:any[]=[];
        mensajes6:any[]=[];
         mensajes7:any[]=[];
          mensajes8:any[]=[];
           mensajes9:any[]=[];
           numero1:number=0;
           numero2:number=0;
           numero3:number=0;
           numero4:number=0;
           numero5:number=0;
           numero6:number=0;
           numero7:number=0;
           numero8:number=0;
           numero9:number=0;
           numero10:number=0;
           resultado:number=0
           toatal:number=0

  constructor( private dataService: ServicioService) { }

  ngOnInit(): void {
    this.dataService.getcomidas().subscribe( (post:any)=> {
      console.log(post);
      this.mensajes=post.detalle[0].nombre;
      this.mensajes1=post.detalle[1].nombre;
      this.mensajes2=post.detalle[2].nombre;
      this.mensajes3=post.detalle[3].nombre;
      this.mensajes4=post.detalle[4].nombre;
      this.mensajes5=post.detalle[5].nombre;
      this.mensajes6=post.detalle[6].nombre;
      this.mensajes7=post.detalle[7].nombre;
      this.mensajes8=post.detalle[8].nombre;
      this.mensajes9=post.detalle[9].nombre;
     
    });
    
}
suma():void{
  this.resultado=this.numero1+this.numero2+this.numero3+this.numero4+this.numero5+this.numero6+this.numero7+this.numero8+this.numero9+this.numero10;
  this.toatal=this.resultado*45;
  console.log(this.toatal);
  alert("Su total es  de $"+ this.toatal);
   document.location.href="/tabs/tab4";
}
}