import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManizalesComponentComponent } from './manizales-component.component';

describe('ManizalesComponentComponent', () => {
  let component: ManizalesComponentComponent;
  let fixture: ComponentFixture<ManizalesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManizalesComponentComponent]
    });
    fixture = TestBed.createComponent(ManizalesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
