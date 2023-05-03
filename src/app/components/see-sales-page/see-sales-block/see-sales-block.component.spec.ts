import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSalesBlockComponent } from './see-sales-block.component';

describe('SeeSalesBlockComponent', () => {
  let component: SeeSalesBlockComponent;
  let fixture: ComponentFixture<SeeSalesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSalesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSalesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
