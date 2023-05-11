import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCarsBackgroundPageComponent } from './manage-cars-background-page.component';

describe('ManageCarsBackgroundPageComponent', () => {
  let component: ManageCarsBackgroundPageComponent;
  let fixture: ComponentFixture<ManageCarsBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCarsBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCarsBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
