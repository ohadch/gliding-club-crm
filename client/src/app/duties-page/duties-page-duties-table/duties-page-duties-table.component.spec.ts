import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesPageDutiesTableComponent } from './duties-page-duties-table.component';

describe('DutiesPageDutiesTableComponent', () => {
  let component: DutiesPageDutiesTableComponent;
  let fixture: ComponentFixture<DutiesPageDutiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutiesPageDutiesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesPageDutiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
