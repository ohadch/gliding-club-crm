import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleLoadDistributionChartComponent } from './role-load-distribution-chart.component';

describe('RoleLoadDistributionChartComponent', () => {
  let component: RoleLoadDistributionChartComponent;
  let fixture: ComponentFixture<RoleLoadDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleLoadDistributionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleLoadDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
