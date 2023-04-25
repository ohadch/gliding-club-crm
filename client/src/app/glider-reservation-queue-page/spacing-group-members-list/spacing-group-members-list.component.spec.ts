import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacingGroupMembersListComponent } from './spacing-group-members-list.component';

describe('SpacingGroupMembersListComponent', () => {
  let component: SpacingGroupMembersListComponent;
  let fixture: ComponentFixture<SpacingGroupMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacingGroupMembersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacingGroupMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
