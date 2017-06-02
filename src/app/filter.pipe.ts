import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(kafkaTPE: any, term: any): any {
if(term=== undefined) return kafkaTPE;

return kafkaTPE.filter(function(flight){
  return flight.airlineCH.toLowerCase().includes(term.toLowerCase());
})
  }

}
