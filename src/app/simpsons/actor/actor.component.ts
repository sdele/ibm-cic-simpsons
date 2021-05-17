import { Component, Input, OnInit } from '@angular/core';
import { Simpson } from '../../interfaces/simpson';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  // Composant mutualisé pour les deux personnages

  @Input() simpson: Simpson;
  public isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  play() {
    this.isHidden = false;
  }


}
