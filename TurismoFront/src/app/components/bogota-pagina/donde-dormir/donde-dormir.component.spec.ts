import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeDormirComponent } from './donde-dormir.component';

describe('DondeDormirComponent', () => {
  let component: DondeDormirComponent;
  let fixture: ComponentFixture<DondeDormirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DondeDormirComponent]
    });
    fixture = TestBed.createComponent(DondeDormirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
