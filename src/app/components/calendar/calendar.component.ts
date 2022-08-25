import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { CalendarService, Day } from './../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterContentChecked {

  @Input() date:string = "";
  weekDays:string[]=['M','T','W','T','F','S','S'];
  days: Day[] =[];
  constructor(private calendarService: CalendarService) { }

  ngAfterContentChecked(): void {    
    const dateParts = this.date.split('/');
    this.days  = this.calendarService.getMonth(+dateParts[0], +dateParts[1]); //el + delante hace que JS auto-castee a number.
  }

}
