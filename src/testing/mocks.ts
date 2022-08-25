import { Component, Input } from "@angular/core"; 

@Component({
    selector: "app-calendar",
    template:""
})
export class MockCalendarComponent{
    @Input() date:string = "";
}

export class MockCalendarService{

  getMonth(year: number, month: number): any[]
  {
    //devuelve array de dias para sep2019:
    const days = [];
     
    for (let i=26;  i<=31; i++){
        days.push({day:i, outsideMonth:true});
    }
    for (let i=1;  i<=30; i++){
        days.push({day:i, outsideMonth:false});
    }
    for (let i=1;  i<=6; i++){
        days.push({day:i, outsideMonth:true});
    }

    return days;
  }
}