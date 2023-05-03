import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaleBlockComponent } from './create-sale-block.component';

describe('CreateSaleBlockComponent', () => {
  let component: CreateSaleBlockComponent;
  let fixture: ComponentFixture<CreateSaleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSaleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
