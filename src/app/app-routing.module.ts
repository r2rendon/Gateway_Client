import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    children:[
      {
        path:'dest',
        loadChildren : ()=> import('./destinations/destinations.module').then( m => m.DestinationsModule)
      },
      {
        path: '**',
        redirectTo: 'dest'
      }

   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
