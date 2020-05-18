import { Injectable } from '@angular/core'

@Injectable()

export class CalcService{
    
  add(a :number,b :number)
  {
    return a+b;
  }
  sub(a :number,b :number)
  {
    return a-b;
  }
  mul(a :number,b :number)
  {
    return a*b;
  }
  div(a :number,b :number)
  {
    if(b===0){
      throw "Invalid divider";
    }
    return a/b;
  }
}

