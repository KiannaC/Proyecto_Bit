import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogotaPaginaComponent } from './bogota-pagina.component';

describe('BogotaPaginaComponent', () => {
  let component: BogotaPaginaComponent;
  let fixture: ComponentFixture<BogotaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BogotaPaginaComponent]
    });
    fixture = TestBed.createComponent(BogotaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
