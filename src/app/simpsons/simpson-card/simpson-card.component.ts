import { Component, Input, OnInit } from '@angular/core';
import { Simpson } from '../../interfaces/simpson';

@Component({
  selector: 'app-simpson-card',
  templateUrl: './simpson-card.component.html',
  styleUrls: ['./simpson-card.component.scss']
})
export class SimpsonCardComponent implements OnInit {

  @Input() simpson: Simpson;
  @Input() isSelected = false;

  constructor() { }

  ngOnInit() {
  }

}
