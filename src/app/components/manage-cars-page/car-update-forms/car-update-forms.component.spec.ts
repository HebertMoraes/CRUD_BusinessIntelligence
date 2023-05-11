import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUpdateFormsComponent } from './car-update-forms.component';

describe('CarUpdateFormsComponent', () => {
  let component: CarUpdateFormsComponent;
  let fixture: ComponentFixture<CarUpdateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUpdateFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarUpdateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
