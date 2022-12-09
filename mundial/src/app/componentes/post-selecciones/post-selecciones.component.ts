import { Component } from '@angular/core';
import { Selecciones } from 'src/app/clases/selecciones';
import { SeleccionServiceService } from 'src/app/servicios/seleccion-service.service';

@Component({
  selector: 'app-post-selecciones',
  templateUrl: './post-selecciones.component.html',
  styleUrls: ['./post-selecciones.component.css']
})
export class PostSeleccionesComponent {

  name:string='';
  players?:number[];

  constructor(private servicioSeleccion:SeleccionServiceService){
    
  }

  addSeleccion(){
    let seleccion:Selecciones={
      name:this.name,
      players:this.players,
    };

    this.servicioSeleccion.postSelecciones(seleccion);
  }
}
