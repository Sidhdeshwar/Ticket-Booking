import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';


@NgModule({
  declarations: [
    MovieHomeComponent,
    MovieBookingComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
