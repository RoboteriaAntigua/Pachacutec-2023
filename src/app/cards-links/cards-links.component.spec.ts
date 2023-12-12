import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLinksComponent } from './cards-links.component';

describe('CardsLinksComponent', () => {
  let component: CardsLinksComponent;
  let fixture: ComponentFixture<CardsLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsLinksComponent]
    });
    fixture = TestBed.createComponent(CardsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
