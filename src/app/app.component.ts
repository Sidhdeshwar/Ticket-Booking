import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  Answer:any = ''
  val:any;

  action:any;
  inputValue:any = '';
  firstValue:any = '';
constructor(){}

enteredValue(valu:any)
{
   this.Answer += valu;
   this.inputValue = `${this.inputValue}${valu}`;
   this.checkOperator(valu);
}

checkOperator(valu:any)
{
  if(valu==='+')
  {
    this.action = '+';
    this.firstValue = this.inputValue;
    this.inputValue = '';
  }
   else if(valu=='-')
   {
    this.action = '-';
    this.firstValue = this.inputValue;
    this.inputValue = '';
   }
   else if(valu=='*')
   {
     this.action = '*';
     this.firstValue = this.inputValue;
     this.inputValue = '';
   }
   else if(valu=='/')
   {
     this.action = '%';
     this.firstValue = this.inputValue;
     this.inputValue = '';
   }
}
equalTo()
{
  debugger;
  let a = '';
  let first = parseFloat(this.firstValue);

   let second = parseFloat(this.inputValue);
   console.log("action : ",this.action);
   console.log('firstValue : ', this.firstValue);


  if(this.action==='+')
  {
     this.Answer = first+second ;
  }
   else if(this.action=='-')
   {
    this.Answer = first-second ;
   }
   else if(this.action=='*')
   {
    this.Answer = first*second ;
   }
   else if(this.action=='/')
   {
    this.Answer = first/second ;
   }



}



}
