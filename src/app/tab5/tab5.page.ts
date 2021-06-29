import { Component, OnInit, } from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  t1: string =""
  constructor(private servicioservice: ServicioService) { }

  ngOnInit() {
  }

}
