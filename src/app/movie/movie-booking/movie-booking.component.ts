import { Component } from '@angular/core';
import { ARRAY, bookingSchedule } from './../../store';
import { from, toArray } from 'rxjs';
import { MovieServService } from '../movie-serv.service';
@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css'],
})
export class MovieBookingComponent {
  SCHEDULES = ARRAY;
  TotalPrice: number = 0;
  currentSchedule: number = 0;

  currentShift:any [] = [];

  constructor(private movieService:MovieServService) {
     this.currentShift = ARRAY[0].morning;
  }

  changeTheSchedule(num: number) {
    if (num == 1) {
      ARRAY[0].selected = true;
      ARRAY[1].selected = false;
      ARRAY[2].selected = false;

      this.currentSchedule = 0;
      this.currentShift = ARRAY[0].morning;

    }
    if (num == 2) {
      ARRAY[0].selected = false;
      ARRAY[1].selected = true;
      ARRAY[2].selected = false;
      this.currentSchedule = 1;
      this.currentShift = ARRAY[1].afternoon;
    }
    if (num == 3) {
      ARRAY[0].selected = false;
      ARRAY[1].selected = false;
      ARRAY[2].selected = true;
      this.currentSchedule = 2;
      this.currentShift = ARRAY[2].evening;
    }
  }

  bookTicket(positionType: string, row: string, seatNo: number) {

       this.movieService.bookTicket(this.currentSchedule,positionType,row,seatNo)
  }
}
