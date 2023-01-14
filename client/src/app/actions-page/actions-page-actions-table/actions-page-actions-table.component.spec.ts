import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPageActionsTableComponent } from './actions-page-actions-table.component';

describe('ActionsPageActionsTableComponent', () => {
  let component: ActionsPageActionsTableComponent;
  let fixture: ComponentFixture<ActionsPageActionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPageActionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPageActionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
