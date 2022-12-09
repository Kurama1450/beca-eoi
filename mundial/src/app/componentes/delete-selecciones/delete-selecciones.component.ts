import { Component } from '@angular/core';
import { SeleccionServiceService } from 'src/app/servicios/seleccion-service.service';

@Component({
  selector: 'app-delete-selecciones',
  templateUrl: './delete-selecciones.component.html',
  styleUrls: ['./delete-selecciones.component.css']
})
export class DeleteSeleccionesComponent {

  idSeleccion:number=0;

  constructor(private servicioSeleccion:SeleccionServiceService){}

  deleteSeleccion(){
    let id = this.idSeleccion;
    this.servicioSeleccion.deleteSelecciones(id).subscribe();
  }

}
