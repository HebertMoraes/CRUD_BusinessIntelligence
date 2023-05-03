import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSaleBlockComponent } from './update-sale-block.component';

describe('UpdateSaleBlockComponent', () => {
  let component: UpdateSaleBlockComponent;
  let fixture: ComponentFixture<UpdateSaleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSaleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSaleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
