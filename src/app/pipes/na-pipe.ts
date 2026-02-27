import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nA',
})
export class NAPipe implements PipeTransform {

  transform(value: any,): unknown {
    if(value!="" && value!=undefined && value!=null){
      return value;
    }
    else{
      return "NA";
    }
  }

}
