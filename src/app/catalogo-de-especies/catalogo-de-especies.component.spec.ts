import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDeEspeciesComponent } from './catalogo-de-especies.component';

describe('CatalogoDeEspeciesComponent', () => {
  let component: CatalogoDeEspeciesComponent;
  let fixture: ComponentFixture<CatalogoDeEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoDeEspeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoDeEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
