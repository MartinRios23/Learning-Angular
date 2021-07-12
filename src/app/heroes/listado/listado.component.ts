import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes:string[] = ['Superman', 'Batman', 'Wonder Woman', 'Green Lantern'];
  heroesBorrados:string ="";


  borrarHeroe(){
    //Acá decimos que si lo que devuelve es un undefined, que lo transforme a string
    this.heroesBorrados = this.heroes.pop() || "";

  }
}
