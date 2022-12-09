import { Component } from '@angular/core';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';

@Component({
  selector: 'app-delete-jugadores',
  templateUrl: './delete-jugadores.component.html',
  styleUrls: ['./delete-jugadores.component.css']
})
export class DeleteJugadoresComponent {

  idPlayer:number=0;

  constructor(private servicioJugadores:JugadoresServiceService){}

  deletePlayer(){
    let id = this.idPlayer;
    this.servicioJugadores.deleteJugadores(id).subscribe();
  }
}
