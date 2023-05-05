import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsBackgroundPageComponent } from './cars-background-page.component';

describe('CarsBackgroundPageComponent', () => {
  let component: CarsBackgroundPageComponent;
  let fixture: ComponentFixture<CarsBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
