import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEnIndexComponent } from './productos-en-index.component';

describe('ProductosEnIndexComponent', () => {
  let component: ProductosEnIndexComponent;
  let fixture: ComponentFixture<ProductosEnIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosEnIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosEnIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
