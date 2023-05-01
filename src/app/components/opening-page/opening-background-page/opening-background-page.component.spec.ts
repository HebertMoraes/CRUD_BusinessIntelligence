import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBackgroundPageComponent } from './opening-background-page.component';

describe('OpeningBackgroundPageComponent', () => {
  let component: OpeningBackgroundPageComponent;
  let fixture: ComponentFixture<OpeningBackgroundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningBackgroundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningBackgroundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToCoursewarePage', () => {
    var routerNavigateByUrlSpy = jest.spyOn(component.router, 'navigateByUrl');
    component.goToCoursewarePage();
    expect(routerNavigateByUrlSpy).toBeCalled();
  });
});
