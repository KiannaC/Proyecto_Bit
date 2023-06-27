import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeticiaPaginaComponent } from './leticia-pagina.component';

describe('LeticiaPaginaComponent', () => {
  let component: LeticiaPaginaComponent;
  let fixture: ComponentFixture<LeticiaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeticiaPaginaComponent]
    });
    fixture = TestBed.createComponent(LeticiaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
