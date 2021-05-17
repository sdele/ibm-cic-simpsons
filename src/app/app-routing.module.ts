import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'simpsons',
    // lazy loading du module simpsons via la méthode loadChildren
    loadChildren: () => import('./simpsons/simpsons.module').then(m => m.SimpsonsModule)
  },
  {
    path: '**',
    redirectTo: 'simpsons',
    pathMatch: 'full'
  }
];

@NgModule({
  // on utilise forRoot pour le routing principal de l'application
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
