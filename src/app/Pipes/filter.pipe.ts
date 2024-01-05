import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,search:String) {
    if (value.length === 0||search==='') { 
      return value
    }
    
    const hotels = [];
    for (const data of value) {
      if (data['name'].toLowerCase().includes(search.toLowerCase())||data['category'].toLowerCase().includes(search.toLowerCase())) {
        hotels.push(data)
      }
    }
    return hotels
  }

}
