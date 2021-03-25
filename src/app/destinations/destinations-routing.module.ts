import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path:'destinations',
        component: DestinationsComponent,
      },
      {
        path:'results',
        component: ResultsComponent,
      },
      {
        path: '**',
        redirectTo: 'destinations'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
