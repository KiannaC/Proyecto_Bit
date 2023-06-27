import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreComponentComponent } from './descubre-component.component';

describe('DescubreComponentComponent', () => {
  let component: DescubreComponentComponent;
  let fixture: ComponentFixture<DescubreComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescubreComponentComponent]
    });
    fixture = TestBed.createComponent(DescubreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
