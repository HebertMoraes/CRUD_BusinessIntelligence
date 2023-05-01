import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBackgroundPageComponent } from './login-background-page.component';

describe('LoginBackgroundPageComponent', () => {
  let component: LoginBackgroundPageComponent;
  let fixture: ComponentFixture<LoginBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
