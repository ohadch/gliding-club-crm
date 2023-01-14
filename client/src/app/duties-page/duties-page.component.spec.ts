import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesPageComponent } from './duties-page.component';

describe('DutiesPageComponent', () => {
  let component: DutiesPageComponent;
  let fixture: ComponentFixture<DutiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
