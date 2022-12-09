import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteJugadoresComponent } from './componentes/delete-jugadores/delete-jugadores.component';
import { GetJugadoresComponent } from './componentes/get-jugadores/get-jugadores.component';
import { ListaJugadoresComponent } from './componentes/lista-jugadores/lista-jugadores.component';
import { PostJugadoresComponent } from './componentes/post-jugadores/post-jugadores.component';
import { PutJugadoresComponent } from './componentes/put-jugadores/put-jugadores.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
