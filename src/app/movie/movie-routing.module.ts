import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';

const routes: Routes = [
  {
    path:'',
    component:MovieBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
