import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations/destinations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DestinationsComponent, ResultsComponent],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class DestinationsModule { }
