import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlidersPageGlidersTableComponent } from './gliders-page-gliders-table.component';

describe('GlidersPageGlidersTableComponent', () => {
  let component: GlidersPageGlidersTableComponent;
  let fixture: ComponentFixture<GlidersPageGlidersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlidersPageGlidersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlidersPageGlidersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
