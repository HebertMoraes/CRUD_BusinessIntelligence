import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundBackgroundPageComponent } from './not-found-background-page.component';

describe('NotFoundBackgroundPageComponent', () => {
  let component: NotFoundBackgroundPageComponent;
  let fixture: ComponentFixture<NotFoundBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
