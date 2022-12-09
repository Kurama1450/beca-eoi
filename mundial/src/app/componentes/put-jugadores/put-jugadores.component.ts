import { Component } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';

@Component({
  selector: 'app-put-jugadores',
  templateUrl: './put-jugadores.component.html',
  styleUrls: ['./put-jugadores.component.css']
})
export class PutJugadoresComponent {

  id:any;
  name:string = '';
  age:number =0;
  posicion:any;

  constructor(private servicioJugadores:JugadoresServiceService){}

  putPlayer(){
    let player:Jugadores = {
      name:this.name,
      age:this.age,
      posicion:this.posicion,
    };

    this.servicioJugadores.putJugadores(player,this.id).subscribe();
  }
}
