import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {

  @Input() personajes: Personaje [] = [];

}
