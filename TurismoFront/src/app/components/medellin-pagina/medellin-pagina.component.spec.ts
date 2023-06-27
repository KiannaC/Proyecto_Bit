import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedellinPaginaComponent } from './medellin-pagina.component';

describe('MedellinPaginaComponent', () => {
  let component: MedellinPaginaComponent;
  let fixture: ComponentFixture<MedellinPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedellinPaginaComponent]
    });
    fixture = TestBed.createComponent(MedellinPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
