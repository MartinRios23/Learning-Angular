import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    
    nombre :string = 'Iron Man';
    edad   :number = 42;

    get nombreMayuscula():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${ this.nombre} - ${ this.edad }`;
    }

    cambiarHeroe():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 15;
    }
}