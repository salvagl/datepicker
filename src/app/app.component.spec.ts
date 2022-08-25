import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MockCalendarComponent } from '../../src/testing/mocks';
import { CalendarComponent } from './components/calendar/calendar.component';

describe('AppComponent', () => {


  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let calendarEl: DebugElement;
  let calendarComponent : CalendarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockCalendarComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges(); //MUY IMPORTANTE!

    component = fixture.componentInstance;
    calendarEl = fixture.debugElement.query(By.css('app-calendar'));
    calendarComponent = calendarEl.componentInstance;
  });

  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });

  it(`should have as title 'datepicker'`, () => {
   
    expect(component.title).toEqual('datepicker');
  });

  // it('should render title', () => {
  
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('datepicker app is running!');
  // });

  it('should contain the calendar', ()=>{
    expect(calendarEl).toBeTruthy();
  });

  it('should has a date as parameter', ()=>{
    
    expect(component.date).toBe("2019/08");

  });
  it('should use the parameter in the template', ()=>{
    
    expect(calendarComponent.date).toBe("2019/08");

  });

  it('should has a next() method to show the next month', ()=>{
    
    component.next();
    expect(component.date).toBe('2019/09');
  });
  it('should has a button that call the next() method', ()=>{
    
    //Comprobamos que se llama a next: SOLO  COMPRUEBA QUE SE LLAMA , EN REALIDAD NO SE EJECUTA NEXT:
    const spy = jest.spyOn(component, "next")
    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();

    //expect(component.date).toBe('2019/09');
    expect(spy).toHaveBeenCalled();

  });
});
