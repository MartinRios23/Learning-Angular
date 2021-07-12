import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarPersonajesComponent } from './agregar-personajes/agregar-personajes.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
//Servicios
import { DBZService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    AgregarPersonajesComponent,
    ListadoPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
    AgregarPersonajesComponent,
    ListadoPersonajesComponent
  ],
  providers:[
    DBZService
  ]
})
export class DBZModule { }
