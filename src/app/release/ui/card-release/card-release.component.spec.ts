import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReleaseComponent } from './card-release.component';

describe('CardReleaseComponent', () => {
  let component: CardReleaseComponent;
  let fixture: ComponentFixture<CardReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
