import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautyDate'
})
export class BeautyDatePipe implements PipeTransform {

  transform(value: string): string {
    let beautyDate ="";

    const dateParts = value.split('/');

    if(dateParts.length !==2 ){
       return ("Unknown date");
    }

    const date = new Date(+dateParts[0], +dateParts[1]); //el + delante hace que JS auto-castee a number.

    beautyDate = `${date.toLocaleDateString('en-US',{month: 'long'})} of ${date.getFullYear()}`; 

    return beautyDate;
  }

}
