import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockCalendarService } from '../../../testing/mocks';

import { BeautyDatePipe } from '../../pipes/beauty-date.pipe';
import { CalendarService } from '../../services/calendar.service';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fakeHostComponent: FakeAppHostComponent;
  let fixture: ComponentFixture<FakeAppHostComponent>; //El fixture lo creamos sobre el componente que hostea a nuestro SUT.
  let service: CalendarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent , FakeAppHostComponent, BeautyDatePipe],
      providers: [{provide: CalendarService, useClass: MockCalendarService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeAppHostComponent);    
    fakeHostComponent = fixture.componentInstance;

    //ahora obtenemos el app-calendar con mecanismo distinto al usado en app-component-spec --> con lo que podría obtenerse, usando: 
    //fixture.debugElement.query(By.css('app-')).nativeElement;
    //En este caso como la template está controlada por la propia spec --> podemos asegurar que ese html solo tendrá un hijo. y que ese será el componente SUT.
    component = fixture.debugElement.children[0].componentInstance;

    //se instancia el servicio mockeado:
    //service = TestBed.get(CalendarService); --> te da instancia nueva del servicio siempre. similar a lo  que sería una 
    // inyección a nivel de componente. Pero si la inyección se está produciendo a nivel de Modulo (singletone) --> 
    // --> esto no estaría simulando el mismo comportamiento.
    //Para tener mismo comportamiento en la inyección que tiene el SUT (en este caso un componente) accedemos al injector del componente y:
    // --> obtenemos su instancia del servicio inyectado.
    service = fixture.debugElement.children[0].injector.get(CalendarService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has an input for the date', () => {       
    expect(component.date).toBe('2019/08');
  });

  it('should contains a formatted date on a header', () => {       
    const header: HTMLDivElement = fixture.debugElement.query(By.css('.card > .card-header')).nativeElement;
    expect (header.textContent).toContain("September of 2019");
  });

  it('should has  the week days letters on top (by default Monday-first)', () => {       
    const weekDaysHeader = fixture.debugElement.queryAll(By.css('.a-week-day'));
    expect(weekDaysHeader.length).toBe(7);

    const monday: HTMLSpanElement = weekDaysHeader[0].children[0].nativeElement;
    expect(monday.textContent).toBe('M');

    const sunday: HTMLSpanElement = weekDaysHeader[6].children[0].nativeElement;
    expect(sunday.textContent).toBe('S');
  });

  it('should ask the calendar service for the proper days',()=>{
    jest.spyOn(service, 'getMonth')
    component.ngAfterContentChecked();
    expect(component.days.length).toBe(42);
    expect(service.getMonth).toHaveBeenCalledWith(2019,8);
  })

  it('should show the days on screen', ()=>{
    
    const days = fixture.debugElement.queryAll(By.css('.a-day'));
    expect(days.length).toBe(42);
    expect(days[0].children[0].nativeElement.textContent).toBe('26');
    expect(days.pop()?.children[0].nativeElement.textContent).toBe('6')

  })
  it('should applies a class for days outside the month', ()=>{
    const days = fixture.debugElement.queryAll(By.css('.a-day'));

    const outsideDay = days[0].children[0].nativeElement;
    expect(outsideDay.getAttribute('class')).toContain('outside');

    const currentMonthDay = days[15].children[0].nativeElement;
    expect(currentMonthDay.getAttribute('class')).toBeNull();
  })

});
@Component({
  selector:'fake-app-host-component',
  template:'<app-calendar [date]="date"></app-calendar>'
})
class FakeAppHostComponent{

  date:string= '2019/08';

}
