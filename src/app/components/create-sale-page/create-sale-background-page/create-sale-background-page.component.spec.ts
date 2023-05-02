import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaleBackgroundPageComponent } from './create-sale-background-page.component';

describe('CreateSaleBackgroundPageComponent', () => {
  let component: CreateSaleBackgroundPageComponent;
  let fixture: ComponentFixture<CreateSaleBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaleBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSaleBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
