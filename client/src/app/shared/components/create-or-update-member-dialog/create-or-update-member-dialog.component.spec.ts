import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateMemberDialogComponent } from './create-or-update-member-dialog.component';

describe('CreateOrUpdateMemberDialogComponent', () => {
  let component: CreateOrUpdateMemberDialogComponent;
  let fixture: ComponentFixture<CreateOrUpdateMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
