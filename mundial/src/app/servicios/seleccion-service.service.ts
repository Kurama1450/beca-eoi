import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Selecciones} from '../clases/selecciones'
import {params} from '../environment/environmentSele'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionServiceService {

  constructor(private http:HttpClient) { }

  getSelecciones():Observable<Array<Selecciones>>{
    return this.http.get<Array<Selecciones>>(params.URL_BACK);
  }

  postSelecciones(seleccion:Selecciones){
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Selecciones>(params.URL_BACK,seleccion,httpOptions);
  }

  deleteSelecciones(id:number):Observable<{}>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let url = params.URL_BACK + "/" +id;
    return this.http.delete(url,httpOptions);
  }

  putSelecciones(seleccion:Selecciones):Observable<Selecciones> {
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const url = params.URL_PLAYERS + "/" + seleccion.id;
    return this.http.put<Selecciones>(url, seleccion,httpOptions);
  }
}
