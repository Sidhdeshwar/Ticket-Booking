import { Injectable } from '@angular/core';
import {ARRAY} from './../store'

@Injectable({
  providedIn: 'root'
})
export class MovieServService {


  constructor() { }



  bookTicket(shift:number, positionType: string, row: string, seatNo: number)
  {
    if(shift==0)
    {
      this.morning(positionType, row, seatNo)
    }
  }
  //* --------------------- MORNING -----------------------------------------
  morning(positionType: string, row: string, seatNo: number)
  {
     if(positionType=='silver')
     {
       this.morningSilver(row,seatNo)
     }
     if(positionType=='golden')
     {
       this.morningGolden(row,seatNo)
     }
     if(positionType=='dimond')
     {
       this.morningDiamond(row,seatNo);
     }
  }
 //~ SILVER
  morningSilver(row: string, seatNo: number)
  {
    ARRAY[0].morning[0].silver[0].A[seatNo] =  !ARRAY[0].morning[0].silver[0].A[seatNo];
  }
  // ^ GOLDEN
  morningGolden(row: string, seatNo: number)
  {
    console.log("ROW : ",row);

     if(row=='B')
     {
      ARRAY[0].morning[1].golden[0].B[seatNo] =  !ARRAY[0].morning[1].golden[0].B[seatNo];
     }
     if(row=='C')
     {
      ARRAY[0].morning[1].golden[1].C[seatNo] =  !ARRAY[0].morning[1].golden[1].C[seatNo];
     }
     if(row=='D')
     {
      ARRAY[0].morning[1].golden[2].D[seatNo] =  !ARRAY[0].morning[1].golden[2].D[seatNo];
     }
  }
  //! DIMOND
  morningDiamond(row: string, seatNo: number)
  {
    if(row=='E')
    {
     ARRAY[0].morning[2].diamond[0].E[seatNo] =  ! ARRAY[0].morning[2].diamond[0].E[seatNo];
    }
    if(row=='F')
    {
     ARRAY[0].morning[2].diamond[1].F[seatNo] =  !ARRAY[0].morning[2].diamond[1].F[seatNo];
    }
    if(row=='G')
    {
     ARRAY[0].morning[2].diamond[2].G[seatNo] =  !ARRAY[0].morning[2].diamond[2].G[seatNo];
    }
    if(row=='H')
    {
     ARRAY[0].morning[2].diamond[3].H[seatNo] =  !ARRAY[0].morning[2].diamond[3].H[seatNo];
    }
  }

}
