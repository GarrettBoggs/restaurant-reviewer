import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "specialty",
  pure: false
})

export class SpecialtyPipe implements PipeTransform {
  transform( input: Restaurant[], specialty) {
    var output: Restaurant[] = [];
    if(specialty === "all"){
      return input;
    }
      for(var i = 0; i < input.length; i++){
        if(input[i].type === specialty){
          output.push(input[i]);
        }
    }
    return output;

  }
}
