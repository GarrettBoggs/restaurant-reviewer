import {Pipe,PipeTransform} from '@angular/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "price",
  pure:false
})

export class PricePipe implements PipeTransform{
  transform(input:Restaurant[],price:string){
    var output: Restaurant[]=[];
    if(price==="0"){
      return input;
    }else{
      for(var i =0;i<input.length;i++){
        if(price===input[i].price){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
