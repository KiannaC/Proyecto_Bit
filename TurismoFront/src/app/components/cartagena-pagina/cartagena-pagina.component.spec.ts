import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartagenaPaginaComponent } from './cartagena-pagina.component';

describe('CartagenaPaginaComponent', () => {
  let component: CartagenaPaginaComponent;
  let fixture: ComponentFixture<CartagenaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartagenaPaginaComponent]
    });
    fixture = TestBed.createComponent(CartagenaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
