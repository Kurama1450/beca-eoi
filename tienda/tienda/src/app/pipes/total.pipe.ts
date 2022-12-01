import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../clases/articulo';
import { IArticulo } from '../interfaces/iarticulo';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(articulos: Array<Articulo>, args?: string){
    return articulos.reduce(
      (acumulado,articulo)=> {return acumulado + articulo['stock']},0
    );
  }

}
