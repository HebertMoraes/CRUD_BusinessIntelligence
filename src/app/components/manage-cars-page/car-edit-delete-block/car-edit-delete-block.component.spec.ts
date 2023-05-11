import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditDeleteBlockComponent } from './car-edit-delete-block.component';

describe('CarBlockComponent', () => {
  let component: CarEditDeleteBlockComponent;
  let fixture: ComponentFixture<CarEditDeleteBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditDeleteBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarEditDeleteBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
