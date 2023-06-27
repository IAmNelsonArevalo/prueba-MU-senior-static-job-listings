import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfferDesktopComponent } from './card-offer-desktop.component';

describe('CardOfferDesktopComponent', () => {
  let component: CardOfferDesktopComponent;
  let fixture: ComponentFixture<CardOfferDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfferDesktopComponent]
    });
    fixture = TestBed.createComponent(CardOfferDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
