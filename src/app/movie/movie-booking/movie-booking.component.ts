import { Component } from '@angular/core';
import { ARRAY, bookingSchedule} from './../../store'
@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent {

  public bookingSchedule1 = ARRAY 
  TotalPrice:number = 0;
  currentSchedule:string = "morning";
  public MySchedule = bookingSchedule.morning
constructor()
{
  console.log("ARRAY : ",ARRAY[0].selected);
  
  bookingSchedule.morning.silver.A[0] = 100;
  bookingSchedule.afternoon.silver.A[0] = 200;
  bookingSchedule.evening.silver.A[0] = 300;
  
}

changeTheSchedule(num:number)
{  

   if(num==1)
   {
      ARRAY[0].selected = true;
      ARRAY[1].selected = false;
      ARRAY[2].selected = false;

    // this.currentSchedule = "morning";
   
    //  this.TotalPrice = bookingSchedule.morning.totalPrice;

   }
   if(num==2)
   {
    ARRAY[0].selected = false;
      ARRAY[1].selected = true;
      ARRAY[2].selected = false;
    // bookingSchedule.morning.selected = false;
    // bookingSchedule.evening.selected = false;
    // bookingSchedule.afternoon.selected = true;
    // this.currentSchedule = "afternoon";
    //  this.MySchedule = bookingSchedule.afternoon;
    //  this.TotalPrice = bookingSchedule.afternoon.totalPrice;
   }
   if(num==3)
   {
    ARRAY[0].selected = false;
    ARRAY[1].selected = false;
    ARRAY[2].selected = true;
    // bookingSchedule.morning.selected = false;
    // bookingSchedule.evening.selected = false;
    // bookingSchedule.afternoon.selected = true;
    // this.currentSchedule = "evening";
    //  this.MySchedule = bookingSchedule.evening
    //  this.TotalPrice = bookingSchedule.evening.totalPrice;
   }
   console.log(this.MySchedule);
}

bookTicket(type:string,row:string, seatNo:number)
{
  console.log(type, row, seatNo);
  if(this.currentSchedule=='morning')
  {

  }
  else if(this.currentSchedule=='afternoon')
  {

  }
  else if(this.currentSchedule=='evening')
  {

  }
}

}
