import { ComponentFixture, TestBed } from '@angular/core/testing';
import ReleaseDashboardComponent from './release-dashboard.component';


describe('ReleaseDashboardComponent', () => {
  let component: ReleaseDashboardComponent;
  let fixture: ComponentFixture<ReleaseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
