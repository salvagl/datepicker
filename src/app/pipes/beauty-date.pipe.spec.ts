import { BeautyDatePipe } from './beauty-date.pipe';

let sut: BeautyDatePipe;

beforeEach(()=>{
  sut = new BeautyDatePipe();
});

describe('BeautyDatePipe', () => {
  it('create an instance', () => {
    
    expect(sut).toBeTruthy();
  });

  it('transform 2019/08 to "September of 2019" ', () => {
    
    const res = sut.transform("2019/08");

    expect(res).toBe("September of 2019");
  });

  it('transform 2040/07 to "August of 2040" ', () => {
    
    const res = sut.transform("2040/07");

    expect(res).toBe("August of 2040");
  });

  it('transform 2018 to "Unknown date" ', () => {
    
    const res = sut.transform("2018");

    expect(res).toBe("Unknown date");
  });

});
