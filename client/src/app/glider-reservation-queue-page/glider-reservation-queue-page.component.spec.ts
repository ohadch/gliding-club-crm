import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GliderReservationQueuePageComponent } from './glider-reservation-queue-page.component';

describe('GliderReservationQueuePageComponent', () => {
  let component: GliderReservationQueuePageComponent;
  let fixture: ComponentFixture<GliderReservationQueuePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GliderReservationQueuePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GliderReservationQueuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
