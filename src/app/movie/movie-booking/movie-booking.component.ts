import { Component } from '@angular/core';
import {bookingSchedule} from './../../store'
@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent {

  Arr:any [] = [10,20,30,40,50,60,70,80,90,100,110,120];
  public bookingSchedule1 = bookingSchedule
  TotalPrice:number = 0;
  public MySchedule = bookingSchedule.morning
constructor()
{
  bookingSchedule.morning.silver.A[0] = 100;
  bookingSchedule.afternoon.silver.A[0] = 200;
  bookingSchedule.evening.silver.A[0] = 300;
   console.log(bookingSchedule);
}

changeTheSchedule(num:number)
{
   if(num==1)
   {
    bookingSchedule.morning.selected = true;
    bookingSchedule.evening.selected = false;
    bookingSchedule.afternoon.selected = false;

     this.MySchedule = bookingSchedule.morning
     this.TotalPrice = bookingSchedule.morning.totalPrice;

   }
   if(num==2)
   {
    bookingSchedule.morning.selected = false;
    bookingSchedule.evening.selected = false;
    bookingSchedule.afternoon.selected = true;

     this.MySchedule = bookingSchedule.afternoon;
     this.TotalPrice = bookingSchedule.afternoon.totalPrice;
   }
   if(num==3)
   {
    bookingSchedule.morning.selected = false;
    bookingSchedule.evening.selected = true;
    bookingSchedule.afternoon.selected = false;

     this.MySchedule = bookingSchedule.evening
     this.TotalPrice = bookingSchedule.evening.totalPrice;
   }
   console.log(this.MySchedule);
}

}
