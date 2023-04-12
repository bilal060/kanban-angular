import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any, ...args: any[]) {
    let tempArr = []
    if(args[0] !== ''){
        list.map(l=>{
         let cards = [];
         l.cards.map(c=> {
            if(c.header.indexOf(args[0]) !== -1|| c.summary.indexOf(args[0]) !== -1){
              cards.push(c);
            }
            return c
         })
         tempArr.push({
           ...l,
           cards: cards
         })
         return l
       })
console.log(tempArr)
       return tempArr
    }
    else {
      return list
    }
  }

}
