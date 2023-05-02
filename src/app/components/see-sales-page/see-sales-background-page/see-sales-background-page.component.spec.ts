import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSalesBackgroundPageComponent } from './see-sales-background-page.component';

describe('SeeSalesBackgroundPageComponent', () => {
  let component: SeeSalesBackgroundPageComponent;
  let fixture: ComponentFixture<SeeSalesBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSalesBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSalesBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
