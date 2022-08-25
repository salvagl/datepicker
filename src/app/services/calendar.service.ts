import { Injectable } from '@angular/core';

export interface Day{
  day:number;
  outsideMonth:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getMonth(year: number, month: number): Day[]
  {
    const days: Day[]= [];
    const date = new Date(year, month,1);

    //obtiene el indice del día de la semana correspondiente al día 1 : getDay() --> 0-domingo, 1-lunes, 2-martes, 3-miercoles....
    const difference = 1-date.getDay();  //numero de huecos a rellenar por delante.
    
    //Se contemmpla caso especial para el Domingo (que tiene indice 0 y provoca un difference = 1)
    //const numberOfLasDays = difference+ 1;
    const numberOfLasDays = this.getNumberOfLastDays(difference) ;


    date.setDate(numberOfLasDays);
    for (let i=0;  i<42; i++){
      let currentMonth = date.getMonth();
      days[i] = {day: date.getDate(), outsideMonth: (currentMonth!==month?true:false)};
      date.setDate(date.getDate()+1);
    }
    let a;
    if (true)
    a=""

    return days;
  }

  private getNumberOfLastDays(difference: number):number{
    return difference ===1 ? -5 : difference+1;

  }
}
