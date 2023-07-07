import { Component, OnInit } from '@angular/core';
import { ARRAY } from './../../store';
import { from, toArray } from 'rxjs';
import { MovieServService } from '../movie-serv.service';
@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css'],
})
export class MovieBookingComponent implements OnInit {
  SCHEDULES: any[] = [];
  TotalPrice: any;
  currentSchedule: number = 0;

  currentShift: any[] = [];

  constructor(private movieService: MovieServService) {
    this.currentShift = ARRAY[0].morning;
    this.TotalPrice = ARRAY[0].total;
  }
  ngOnInit(): void {
    this.SCHEDULES = ARRAY;
  }
  changeTheSchedule(num: number) {
    if (num == 1) {
      ARRAY[0].selected = true;
      ARRAY[1].selected = false;
      ARRAY[2].selected = false;

      this.currentSchedule = 0;
      this.TotalPrice = ARRAY[0].total;
      this.currentShift = ARRAY[0].morning;
      localStorage.setItem('movieTicket', JSON.stringify(ARRAY));
    }
    if (num == 2) {
      ARRAY[0].selected = false;
      ARRAY[1].selected = true;
      ARRAY[2].selected = false;
      this.currentSchedule = 1;
      this.TotalPrice = ARRAY[1].total;
      this.currentShift = ARRAY[1].afternoon;
      localStorage.setItem('movieTicket', JSON.stringify(ARRAY));
    }
    if (num == 3) {
      ARRAY[0].selected = false;
      ARRAY[1].selected = false;
      ARRAY[2].selected = true;
      this.currentSchedule = 2;
      this.TotalPrice = ARRAY[2].total;
      this.currentShift = ARRAY[2].evening;
      localStorage.setItem('movieTicket', JSON.stringify(ARRAY));
    }
  }
  bookTicket(positionType: string, row: string, seatNo: number) {
    this.movieService.bookTicket(
      this.currentSchedule,
      positionType,
      row,
      seatNo
    );
  }

  abc(a: boolean, index: number) {
    console.log(a);

    if (a) {
      this.currentSchedule = index;
      this.changeTheSchedule(index)
      return 'shift'
    }
    return '';
  }
}
