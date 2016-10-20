import {Pipe, PipeTransform} from '@angular/core';
import {Review} from './review.model';

@Pipe({
  name: "rating",
  pure: false
})

export class RatingPipe implements PipeTransform{
  transform(input: Review[]){

    input.sort(function(a,b) {
      if(a.rating > b.rating){
        return -1;
      }
      if(a.rating < b.rating){
        return 1;
      }
      return 0;
    });
      return input;

  }
}
