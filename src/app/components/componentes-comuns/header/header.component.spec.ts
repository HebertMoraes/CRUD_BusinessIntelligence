import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <app-header 
      [colorBackground]="'#FFFFFF'" 
      [colorOfElements]="'#7183A6'" 
      [enableChangeEnvironment]="true"
      [iconChangeEnvironmentPath]="'pathTest.svg'"
      [icon1Path]="'pathTest.svg'"
      [icon2Path]="'pathTest.svg'"
      [icon3Path]="'pathTest.svg'"
      [iconProfilePath]="'pathTest.svg'"
      [icon4Path]="'pathTest.svg'">
    </app-header>
  `,
})
class TestHeaderComponent {
  @ViewChild(HeaderComponent) designThumbComps!: HeaderComponent;
}


describe('HeaderComponent', () => {
  let component: TestHeaderComponent;
  let fixture: ComponentFixture<TestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TestHeaderComponent ], 
      providers: [ Router ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToOpeningPage', () => {
    var routerNavigateSpy = jest.spyOn(component.designThumbComps.router, 'navigateByUrl');
    component.designThumbComps.goToOpeningPage();
    expect(routerNavigateSpy).toBeCalled();
  });
});
