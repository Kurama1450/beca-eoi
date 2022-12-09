import { Component } from '@angular/core';
import { Selecciones } from 'src/app/clases/selecciones';
import { SeleccionServiceService } from 'src/app/servicios/seleccion-service.service';

@Component({
  selector: 'app-get-selecciones',
  templateUrl: './get-selecciones.component.html',
  styleUrls: ['./get-selecciones.component.css']
})
export class GetSeleccionesComponent {

  selecciones:Array<Selecciones>;

  constructor(private servicioSeleccion:SeleccionServiceService){
    this.selecciones = [];
  }

  ngOnInit(): void {
    this.servicioSeleccion.getSelecciones().subscribe({
      next:(ok:Array<Selecciones>) =>{
        this.selecciones = ok;
      },
      error: (error) =>{
        
      }
    })
      
  }

}
