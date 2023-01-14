import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPageRolesTableComponent } from './roles-page-roles-table.component';

describe('RolesPageRolesTableComponent', () => {
  let component: RolesPageRolesTableComponent;
  let fixture: ComponentFixture<RolesPageRolesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPageRolesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPageRolesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
