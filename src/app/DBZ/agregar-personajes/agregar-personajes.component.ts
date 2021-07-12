import { Component, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.scss']
})
export class AgregarPersonajesComponent{

  //Entre los paréntesis del input, podría ponerle el nombre que yo quiera, para no confundir. Pero tambien debería cambiarlo en el html donde envío los datos
  @Input() nuevo:Personaje = {nombre: '', poder:0};

  // //Output es para emitir un valor del componente hijo al componente padre
  // @Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

  constructor(private dbzService:DBZService){}


  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    //Estoy emitiendo un Personaje
    // this.onNuevoPersonaje.emit(this.nuevo);


    //Así agrego personajes utilizando servicios, mucho mejor que usando Outputs e Inputs
    this.dbzService.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  eliminar(){
    this.dbzService.eliminar();
  }
}
