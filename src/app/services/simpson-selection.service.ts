import { Injectable } from '@angular/core';
import { Simpson } from '../interfaces/simpson';

@Injectable({
  providedIn: 'root'
})
export class SimpsonSelectionService {


  private leftCharacter: Simpson;
  private rightCharacter: Simpson;

  constructor() { }

  // On utilise un service pour assurer la communication entre nos composants simpsonSelection et SceneComponent
  saveSelectedCharacters(left: Simpson, right: Simpson) {
    this.leftCharacter = left;
    this.rightCharacter = right;
  }

  getLeftCharacter() {
    return this.leftCharacter;
  }

  getRightCharacter() {
    return this.rightCharacter;
  }

}
