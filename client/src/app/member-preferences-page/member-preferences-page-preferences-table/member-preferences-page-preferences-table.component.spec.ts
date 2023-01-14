import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPreferencesPagePreferencesTableComponent } from './member-preferences-page-preferences-table.component';

describe('MemberPreferencesPagePreferencesTableComponent', () => {
  let component: MemberPreferencesPagePreferencesTableComponent;
  let fixture: ComponentFixture<MemberPreferencesPagePreferencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPreferencesPagePreferencesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPreferencesPagePreferencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
