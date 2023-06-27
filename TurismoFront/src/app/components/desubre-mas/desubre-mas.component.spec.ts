import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesubreMasComponent } from './desubre-mas.component';

describe('DesubreMasComponent', () => {
  let component: DesubreMasComponent;
  let fixture: ComponentFixture<DesubreMasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesubreMasComponent]
    });
    fixture = TestBed.createComponent(DesubreMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
