import { Component,OnInit} from '@angular/core';
import{Geolocation} from '@ionic-native/geolocation/ngx';
import{LoadingController}from '@ionic/angular';
import {ServicioService} from '../servicios/servicio.service';
declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  map: any;
  origin:any;
directionsService=new google.maps.DirectionsService();
directionsDisplay=new google.maps.DirectionsRenderer();
destination={ lat:19.631434, lng:-99.015816}

  constructor(private geolocation:Geolocation, private loadCtrl:LoadingController, private servicioservice: ServicioService) {}

ngOnInit()
{
  this.loabmap();
}
 async loabmap()
{
  const loading= await this.loadCtrl.create();
  loading.present();
 const tra= await this.geolocation.getCurrentPosition();
 const myLatLng={

   lat: tra.coords.latitude,
   lng: tra.coords.longitude,
 };
console.log(myLatLng);
 this.origin =myLatLng
const mapele:HTMLElement=document.getElementById("map");
this.map= new google.maps.Map(mapele,{
center:myLatLng,
zoom:12
});
this.directionsDisplay.setMap(this.map);
google.maps.event
.addListenerOnce(this.map,'idle',()=>{
  loading.dismiss();
  this.calcular();
  const marker=new google.maps.Marker({
position:{
  lat: myLatLng.lat,
  lng: myLatLng.lng
},
map:this.map,
title:'Mi ubicacion¡'
  });


});

}
private calcular()
{
  this.directionsService.route({
    origin:this.origin,
    destination:this.destination,
    travelMode:google.maps.TravelMode.DRIVING,
  },(resenpose,status)=>{
    if(status==google.maps.DirectionsStatus.OK){
      this.directionsDisplay.setDirections(resenpose);
    }else{
      alert('estado incorrecto'+status);
    }

  });
}
}
