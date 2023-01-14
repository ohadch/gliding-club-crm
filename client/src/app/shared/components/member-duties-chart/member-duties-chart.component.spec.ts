import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDutiesChartComponent } from './member-duties-chart.component';

describe('MemberDutiesChartComponent', () => {
  let component: MemberDutiesChartComponent;
  let fixture: ComponentFixture<MemberDutiesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDutiesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDutiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
