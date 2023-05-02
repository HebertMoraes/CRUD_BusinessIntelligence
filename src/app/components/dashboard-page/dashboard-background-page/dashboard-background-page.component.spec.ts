import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBackgroundPageComponent } from './dashboard-background-page.component';

describe('DashboardBackgroundPageComponent', () => {
  let component: DashboardBackgroundPageComponent;
  let fixture: ComponentFixture<DashboardBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
