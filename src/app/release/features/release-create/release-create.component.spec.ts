import { ComponentFixture, TestBed } from '@angular/core/testing';

import ReleaseCreateComponent from './release-create.component';

describe('ReleaseCreateComponent', () => {
  let component: ReleaseCreateComponent;
  let fixture: ComponentFixture<ReleaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
