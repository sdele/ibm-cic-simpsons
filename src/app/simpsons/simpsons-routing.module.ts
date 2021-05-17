import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpsonsSelectionComponent } from './simpsons-selection/simpsons-selection.component';
import { SceneComponent } from './scene/scene.component';


const routes: Routes = [
  {
    path: '',
    component: SimpsonsSelectionComponent
  },
  {
    // au routing vers scene on chargera le composant sceneComposant
    path: 'scene',
    component: SceneComponent
    // canActivate: []
    // c'est au routing qu'on peut ajouter des Guards permettant d'effectuer des contrôles et d'autoriser l'accès ou non
    // + d'infos sur https://angular.io/guide/router#preventing-unauthorized-access
  }
];

@NgModule({
  // et ici forChild pour les routings secondaire
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpsonsRoutingModule { }
