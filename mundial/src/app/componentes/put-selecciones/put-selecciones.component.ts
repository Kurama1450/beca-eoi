import { Component } from '@angular/core';
import { Selecciones } from 'src/app/clases/selecciones';
import { SeleccionServiceService } from 'src/app/servicios/seleccion-service.service';

@Component({
  selector: 'app-put-selecciones',
  templateUrl: './put-selecciones.component.html',
  styleUrls: ['./put-selecciones.component.css']
})
export class PutSeleccionesComponent {

  name:string = '';
  players?:number[];

  constructor(private servicioSeleccion:SeleccionServiceService){}

  putSeleccion(){
    let seleccion:Selecciones = {
      name:this.name,
      players:this.players,
    };

    this.servicioSeleccion.putSelecciones(seleccion).subscribe();
  }

}
