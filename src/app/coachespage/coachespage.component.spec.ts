import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachespageComponent } from './coachespage.component';

describe('CoachespageComponent', () => {
  let component: CoachespageComponent;
  let fixture: ComponentFixture<CoachespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
