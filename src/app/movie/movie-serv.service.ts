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
      this.morning(positionType, row, seatNo);
      this.morningTotal();
    }
    if(shift==1)
    {
      this.afternoon(positionType, row, seatNo);
      this.afternoonTotal();
    }
    if(shift==2)
    {
      this.evening(positionType, row, seatNo);
      this.eveningTotal();
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


  //* --------------------- AFTERNOON -----------------------------------------
  afternoon(positionType: string, row: string, seatNo: number)
  {
    console.log("Afternoon", positionType, row,seatNo);

     if(positionType=='silver')
     {
       this.afternoonSilver(row,seatNo)
     }
     if(positionType=='golden')
     {
       this.afternoonGolden(row,seatNo)
     }
     if(positionType=='dimond')
     {
       this.afternoonDiamond(row,seatNo);
     }
  }
 //~ SILVER
 afternoonSilver(row: string, seatNo: number)
  {
    ARRAY[1].afternoon[0].silver[0].A[seatNo] =  !ARRAY[1].afternoon[0].silver[0].A[seatNo];
  }
  // ^ GOLDEN
  afternoonGolden(row: string, seatNo: number)
  {
     if(row=='B')
     {
      ARRAY[1].afternoon[1].golden[0].B[seatNo] =  !ARRAY[1].afternoon[1].golden[0].B[seatNo];
     }
     if(row=='C')
     {
      ARRAY[1].afternoon[1].golden[1].C[seatNo] =  !ARRAY[1].afternoon[1].golden[1].C[seatNo];
     }
     if(row=='D')
     {
      ARRAY[1].afternoon[1].golden[2].D[seatNo] =  !ARRAY[1].afternoon[1].golden[2].D[seatNo];
     }
  }
  //! DIMOND
  afternoonDiamond(row: string, seatNo: number)
  {
    if(row=='E')
    {
      ARRAY[1].afternoon[2].diamond[0].E[seatNo] =  ! ARRAY[1].afternoon[2].diamond[0].E[seatNo];
    }
    if(row=='F')
    {
      ARRAY[1].afternoon[2].diamond[1].F[seatNo] =  !ARRAY[1].afternoon[2].diamond[1].F[seatNo];
    }
    if(row=='G')
    {
      ARRAY[1].afternoon[2].diamond[2].G[seatNo] =  !ARRAY[1].afternoon[2].diamond[2].G[seatNo];
    }
    if(row=='H')
    {
      ARRAY[1].afternoon[2].diamond[3].H[seatNo] =  !ARRAY[1].afternoon[2].diamond[3].H[seatNo];
    }
  }

  //* --------------------- EVENING -----------------------------------------
  evening(positionType: string, row: string, seatNo: number)
  {
    console.log("Afternoon", positionType, row,seatNo);

     if(positionType=='silver')
     {
       this.eveningSilver(row,seatNo)
     }
     if(positionType=='golden')
     {
       this.eveningGolden(row,seatNo)
     }
     if(positionType=='dimond')
     {
       this.eveningDiamond(row,seatNo);
     }
  }
 //~ SILVER
 eveningSilver(row: string, seatNo: number)
  {
    ARRAY[2].evening[0].silver[0].A[seatNo] =  !ARRAY[2].evening[0].silver[0].A[seatNo];
  }
  // ^ GOLDEN
  eveningGolden(row: string, seatNo: number)
  {
     if(row=='B')
     {
      ARRAY[2].evening[1].golden[0].B[seatNo] =  !ARRAY[2].evening[1].golden[0].B[seatNo];
     }
     if(row=='C')
     {
      ARRAY[2].evening[1].golden[1].C[seatNo] =  !ARRAY[2].evening[1].golden[1].C[seatNo];
     }
     if(row=='D')
     {
      ARRAY[2].evening[1].golden[2].D[seatNo] =  !ARRAY[2].evening[1].golden[2].D[seatNo];
     }
  }
  //! DIMOND
  eveningDiamond(row: string, seatNo: number)
  {
    if(row=='E')
    {
      ARRAY[2].evening[2].diamond[0].E[seatNo] =  ! ARRAY[2].evening[2].diamond[0].E[seatNo];
    }
    if(row=='F')
    {
      ARRAY[2].evening[2].diamond[1].F[seatNo] =  !ARRAY[2].evening[2].diamond[1].F[seatNo];
    }
    if(row=='G')
    {
      ARRAY[2].evening[2].diamond[2].G[seatNo] =  !ARRAY[2].evening[2].diamond[2].G[seatNo];
    }
    if(row=='H')
    {
      ARRAY[2].evening[2].diamond[3].H[seatNo] =  !ARRAY[2].evening[2].diamond[3].H[seatNo];
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //******************************************************************************************************** */

morningTotal()
{
  let a = ARRAY[0].morning;
  let total = 0;
  //~ Silver
  var b =a[0].silver;
  for(let i=0 ; i<b[0].A.length ; i++)
  {
     if(b[0].A[i])
       total +=150;
  }
  //^ Golden
  var b =a[1].golden;
  for(let i=0 ; i<b[0].B.length ; i++)
  {
     if(b[0].B[i])
       total +=200;
  }
  for(let i=0 ; i<b[1].C.length ; i++)
  {
     if(b[1].C[i])
       total +=200;
  }
  for(let i=0 ; i<b[2].D.length ; i++)
  {
     if(b[2].D[i])
       total +=200;
  }
    //^ Diamond
    var b =a[2].diamond;
    for(let i=0 ; i<b[0].E.length ; i++)
    {
       if(b[0].E[i])
         total +=250;
    }
    for(let i=0 ; i<b[1].F.length ; i++)
    {
       if(b[1].F[i])
         total +=250;
    }
    for(let i=0 ; i<b[2].G.length ; i++)
    {
       if(b[2].G[i])
         total +=250;
    }
    for(let i=0 ; i<b[3].H.length ; i++)
    {
       if(b[3].H[i])
         total +=250;
    }
  ARRAY[0].total = total;
  localStorage.setItem('movieTicket',JSON.stringify(ARRAY))
}
//*********************************** AFTERNOON ********************************* */

afternoonTotal()
{
  let a = ARRAY[1].afternoon;
  let total = 0;
  //~ Silver
  var b =a[0].silver;
  for(let i=0 ; i<b[0].A.length ; i++)
  {
     if(b[0].A[i])
       total +=150;
  }
  //^ Golden
  var b =a[1].golden;
  for(let i=0 ; i<b[0].B.length ; i++)
  {
     if(b[0].B[i])
       total +=200;
  }
  for(let i=0 ; i<b[1].C.length ; i++)
  {
     if(b[1].C[i])
       total +=200;
  }
  for(let i=0 ; i<b[2].D.length ; i++)
  {
     if(b[2].D[i])
       total +=200;
  }
    //^ Diamond
    var b =a[2].diamond;
    console.log(b);

    for(let i=0 ; i<b[0].E.length ; i++)
    {
       if(b[0].E[i])
         total +=250;
    }
    for(let i=0 ; i<b[1].F.length ; i++)
    {
       if(b[1].F[i])
         total +=250;
    }
    for(let i=0 ; i<b[2].G.length ; i++)
    {
       if(b[2].G[i])
         total +=250;
    }
    for(let i=0 ; i<b[3].H.length ; i++)
    {
       if(b[3].H[i])
         total +=250;
    }
    console.log(total);

  ARRAY[1].total = total;
  localStorage.setItem('movieTicket',JSON.stringify(ARRAY))
}


//*********************************** EVENING ********************************* */

eveningTotal()
{
  let a = ARRAY[2].evening;
  let total = 0;
  //~ Silver
  var b =a[0].silver;
  for(let i=0 ; i<b[0].A.length ; i++)
  {
     if(b[0].A[i])
       total +=150;
  }
  //^ Golden
  var b =a[1].golden;
  for(let i=0 ; i<b[0].B.length ; i++)
  {
     if(b[0].B[i])
       total +=200;
  }
  for(let i=0 ; i<b[1].C.length ; i++)
  {
     if(b[1].C[i])
       total +=200;
  }
  for(let i=0 ; i<b[2].D.length ; i++)
  {
     if(b[2].D[i])
       total +=200;
  }
    //^ Diamond
    var b =a[2].diamond;
    console.log(b);

    for(let i=0 ; i<b[0].E.length ; i++)
    {
       if(b[0].E[i])
         total +=250;
    }
    for(let i=0 ; i<b[1].F.length ; i++)
    {
       if(b[1].F[i])
         total +=250;
    }
    for(let i=0 ; i<b[2].G.length ; i++)
    {
       if(b[2].G[i])
         total +=250;
    }
    for(let i=0 ; i<b[3].H.length ; i++)
    {
       if(b[3].H[i])
         total +=250;
    }
    console.log(total);

  ARRAY[2].total = total;
  localStorage.setItem('movieTicket',JSON.stringify(ARRAY))
}
}
