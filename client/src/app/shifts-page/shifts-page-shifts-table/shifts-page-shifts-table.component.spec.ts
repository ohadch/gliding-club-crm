import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsPageShiftsTableComponent } from './shifts-page-shifts-table.component';

describe('ShiftsPageShiftsTableComponent', () => {
  let component: ShiftsPageShiftsTableComponent;
  let fixture: ComponentFixture<ShiftsPageShiftsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsPageShiftsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsPageShiftsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
