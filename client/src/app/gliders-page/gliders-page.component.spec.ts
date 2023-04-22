import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlidersPageComponent } from './gliders-page.component';

describe('GlidersPageComponent', () => {
  let component: GlidersPageComponent;
  let fixture: ComponentFixture<GlidersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlidersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
