import { TestBed } from '@angular/core/testing';

import { CalendarService, Day } from './calendar.service';

describe('CalendarService', () => {
  let sut: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sut = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });


  it('should mark days out of the month', ()=>{

    const days: Day[] = sut.getMonth(2018,5);
    const day28 = days[0];
    const day1Jun = days[4];
    const day1Jul = days[34];
    //console.log(day28);
    expect (day28).toEqual({day:28, outsideMonth:true});
    expect (day1Jun).toEqual({day:1, outsideMonth:false});
    expect (day1Jul).toEqual({day:1, outsideMonth:true});


  })
  // it("Should generate a month starting on Saturday", () =>
  // {
  //   //operation: obtenemos JUNIO de 2019
  //   const days: Day[] = sut.getMonth(2019,5);

  //   expect (days.length).toBe(42);    //el grid será de 7x6 siempre --> 42 dias se muestran (dias del mes previo , dias del mes testeado , dias del mes siguiente)
  //   expect (days[0].day).toBe(27);    //primer dia muestra correponde al 27 del mes de mayo.
  //   expect (days[41].day).toBe(7);  //ultimo dia mostrado corresponde al 7 del mes de julio.

  // });
  // it("Should generate a month starting on monday", () =>
  // {
  //   //operation: obtenemos julio de 2019
  //   const days: Day[] = sut.getMonth(2019,6);

  //   expect (days.length).toBe(42);    //el grid será de 7x6 siempre --> 42 dias se muestran (dias del mes previo , dias del mes testeado , dias del mes siguiente)
  //   expect (days[0].day).toBe(26);    //primer dia muestra correponde al 27 del mes de mayo.
  //   expect (days[41].day).toBe(6);  //ultimo dia mostrado corresponde al 7 del mes de julio.

  // });
  // it("Should generate a month starting on tuesday", () =>
  // {
  //   //operation: obtenemos julio de 2019
  //   const days: Day[] = sut.getMonth(2019,0);

  //   expect (days.length).toBe(42);    //el grid será de 7x6 siempre --> 42 dias se muestran (dias del mes previo , dias del mes testeado , dias del mes siguiente)
  //   expect (days[0].day).toBe(31);    //primer dia muestra correponde al 27 del mes de mayo.
  //   expect (days[41].day).toBe(10);  //ultimo dia mostrado corresponde al 7 del mes de julio.

  // });

  // it("Should generate a month starting on sunday", () =>
  // {
  //   //operation: obtenemos Septiembre de 2019
  //   const days: Day[] = sut.getMonth(2019,8);

  //   expect (days.length).toBe(42);    //el grid será de 7x6 siempre --> 42 dias se muestran (dias del mes previo , dias del mes testeado , dias del mes siguiente)
  //   expect (days[0].day).toBe(26);    //primer dia muestra correponde al 27 del mes de mayo.
  //   expect (days[41].day).toBe(6);  //ultimo dia mostrado corresponde al 7 del mes de julio.

  // });
});
