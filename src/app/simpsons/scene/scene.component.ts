import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpsonSelectionService } from '../../services/simpson-selection.service';
import { Simpson } from '../../interfaces/simpson';
import { ActorComponent } from '../actor/actor.component';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  public leftSimpson: Simpson;
  public rightSimpson: Simpson;

  // See https://angular.io/api/core/ViewChild for details about static
  // Exemple de communication possible entre deux composants parent/enfant
  // Permet par exemple de garder les contrôles dans le composant parent
  @ViewChild('leftActor', {static: false}) leftActor: ActorComponent;
  @ViewChild('rightActor', {static: false}) rightActor: ActorComponent;

  constructor(
    private simpsonService: SimpsonSelectionService
  ) { }

  // A l'initialisation du composant on recupère nos deux personnages
  ngOnInit() {
    this.leftSimpson = this.simpsonService.getLeftCharacter();
    this.rightSimpson = this.simpsonService.getRightCharacter();
  }

 playScene() {
    this.leftActor.play();
    this.rightActor.play();
 }

}
