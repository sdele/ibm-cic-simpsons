import { Component, OnInit } from '@angular/core';
import { SimpsonsApiService } from '../../services/simpsons-api.service';
import { Simpson } from '../../interfaces/simpson';
import { SimpsonSelectionService } from '../../services/simpson-selection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-simpsons-selection',
  templateUrl: './simpsons-selection.component.html',
  styleUrls: ['./simpsons-selection.component.scss']
})
export class SimpsonsSelectionComponent implements OnInit {

  public simpsons: Simpson[] = [];

  // index of selected characters
  private leftCharacter: number;
  private rightCharacter: number;

  constructor(
    private simpsonsApi: SimpsonsApiService,
    private simpsonService: SimpsonSelectionService,
    private router: Router) { }

  ngOnInit() {
    this.getSimpsonsData();
  }

  getSimpsonsData() {
    this.simpsonsApi.getSimpsonsQuotes().subscribe((simpsonsData: Simpson[]) => {
      // remove selection
      this.leftCharacter = null;
      this.rightCharacter = null;
      // get new simpsons
      this.simpsons = simpsonsData;
    });
  }

  selectSimpson(simpsonIndex: number, direction: string) {
    // save index of selected simpson
    if (direction === 'Left') {
      // unselect or take the new index
      this.leftCharacter = this.leftCharacter === simpsonIndex ? null : simpsonIndex;

    } else {
      this.rightCharacter = this.rightCharacter === simpsonIndex ? null : simpsonIndex;
    }

  }

  goToScene() {
    // save in service
    this.simpsonService.saveSelectedCharacters(this.simpsons[this.leftCharacter], this.simpsons[this.rightCharacter]);
    // router to scene component
    this.router.navigate(['/simpsons/scene']);

  }

}
