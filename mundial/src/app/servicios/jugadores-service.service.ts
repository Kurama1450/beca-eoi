import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Jugadores} from '../clases/jugadores'
import { Observable } from 'rxjs';
import {params} from '../environment/environmentSele'

@Injectable({
  providedIn: 'root'
})
export class JugadoresServiceService {

  constructor(private http:HttpClient) { }

  getJugadores():Observable<Array<Jugadores>>{
    return this.http.get<Array<Jugadores>>(params.URL_PLAYERS);
  }

  postJugador(jugador:Jugadores){
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Jugadores>(params.URL_PLAYERS,jugador,httpOptions);
  }

  deleteJugadores(id:number):Observable<{}>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = params.URL_PLAYERS + "/" +id;
    return this.http.delete(url,httpOptions);
  }

  putJugadores(jugador:Jugadores):Observable<Jugadores> {
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const url = params.URL_PLAYERS + "/" + jugador.id;
    return this.http.put<Jugadores>(url, jugador,httpOptions);
  }
}
