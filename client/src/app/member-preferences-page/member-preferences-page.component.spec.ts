import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPreferencesPageComponent } from './member-preferences-page.component';

describe('MemberPreferencesPageComponent', () => {
  let component: MemberPreferencesPageComponent;
  let fixture: ComponentFixture<MemberPreferencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPreferencesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPreferencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
