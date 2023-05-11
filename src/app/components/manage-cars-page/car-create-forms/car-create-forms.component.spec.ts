import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateFormsComponent } from './car-create-forms.component';

describe('CarCreateFormsComponent', () => {
  let component: CarCreateFormsComponent;
  let fixture: ComponentFixture<CarCreateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCreateFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCreateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
