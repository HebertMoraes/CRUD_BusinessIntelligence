import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarrouselComponent } from './content-carrousel.component';

describe('ContentCarrouselComponent', () => {
  let component: ContentCarrouselComponent;
  let fixture: ComponentFixture<ContentCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('scrollToLeft', () => {
    component.maxScrollCarrousel = -1
    component.scrollToLeft();
    fixture.detectChanges();
    expect(component.currentPosCarrousel).toBe(0);
  });

  it('scrollToRight', () => {
    var posSlideBefore = component.currentPosCarrousel;
    component.maxScrollCarrousel = -140
    component.scrollToRight();
    fixture.detectChanges();
    expect(component.currentPosCarrousel).toBe(posSlideBefore - component.distanceCarrouselMov);
  });
});
