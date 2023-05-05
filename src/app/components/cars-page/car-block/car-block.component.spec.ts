import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBlockComponent } from './car-block.component';

describe('CarBlockComponent', () => {
  let component: CarBlockComponent;
  let fixture: ComponentFixture<CarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
