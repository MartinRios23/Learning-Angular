import { Component, Input } from '@angular/core';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.scss']
})
export class ListadoPersonajesComponent{

  get personajes(){
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService:DBZService){

  }
}
