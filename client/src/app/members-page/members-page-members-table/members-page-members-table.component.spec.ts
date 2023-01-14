import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPageMembersTableComponent } from './members-page-members-table.component';

describe('MembersPageMembersTableComponent', () => {
  let component: MembersPageMembersTableComponent;
  let fixture: ComponentFixture<MembersPageMembersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersPageMembersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersPageMembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
