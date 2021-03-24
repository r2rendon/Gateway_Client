import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations/destinations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DestinationsComponent],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    NgbModule
  ]
})
export class DestinationsModule { }
