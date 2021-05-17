import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpsonsSelectionComponent } from './simpsons-selection/simpsons-selection.component';
import { SimpsonsRoutingModule } from './simpsons-routing.module';
import { SimpsonCardComponent } from './simpson-card/simpson-card.component';
import { SelectableDirective } from '../directives/selectable.directive';
import { SceneComponent } from './scene/scene.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  // declaration des composants, directives, pipes... du module
  declarations: [
    SimpsonsSelectionComponent,
    SimpsonCardComponent,
    SelectableDirective,
    SceneComponent,
    ActorComponent
  ],
  // import nécessaire au module pour fonctionner
  imports: [
    CommonModule,
    SimpsonsRoutingModule
  ],
  // pas utilisé dans notre exercice mais permet par exemple de rendre accessible un service ou une directive par exemple
  // en dehors du module
  exports : []
})
export class SimpsonsModule { }
