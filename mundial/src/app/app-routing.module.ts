import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteJugadoresComponent } from './componentes/delete-jugadores/delete-jugadores.component';
import { DeleteSeleccionesComponent } from './componentes/delete-selecciones/delete-selecciones.component';
import { GetJugadoresComponent } from './componentes/get-jugadores/get-jugadores.component';
import { GetSeleccionesComponent } from './componentes/get-selecciones/get-selecciones.component';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';
import { PostJugadoresComponent } from './componentes/post-jugadores/post-jugadores.component';
import { PostSeleccionesComponent } from './componentes/post-selecciones/post-selecciones.component';
import { PutJugadoresComponent } from './componentes/put-jugadores/put-jugadores.component';
import { PutSeleccionesComponent } from './componentes/put-selecciones/put-selecciones.component';

const routes: Routes = [
  {
    path:'go-post-jugadores',component:PostJugadoresComponent
  },
  {
    path:'go-delete-jugadores',component:DeleteJugadoresComponent
  },
  {
    path:'go-put-jugadores',component:PutJugadoresComponent
  },
  {
    path:'go-get-jugadores',component:GetJugadoresComponent
  },
  {
    path:'go-get-selecciones',component:GetSeleccionesComponent
  },
  {
    path:'go-post-selecciones',component:PostSeleccionesComponent
  },
  {
    path:'go-put-selecciones',component:PutSeleccionesComponent
  },
  {
    path:'go-delete-selecciones',component:DeleteSeleccionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
