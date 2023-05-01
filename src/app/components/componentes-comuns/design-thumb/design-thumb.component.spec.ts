import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignThumbComponent } from './design-thumb.component';
import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  template: `
    <app-design-thumb 
        [tittle]="'tittle test'"
        [urlImgThumb]="'patchImg'" 
        [numberSlides]="[[0, 1], [0, 1], [0, 1]]" 
        [idDesign]="'idtest'" 
        [widthComponent]="'295px'"
        (goToEdit)="clicou($event)" >
    </app-design-thumb>    
    <app-design-thumb 
        [tittle]="'tittle test'"
        [urlImgThumb]="'patchImg'" 
        [numberSlides]="undefined" 
        [idDesign]="'idtest'" 
        [widthComponent]="'295px'"
        (goToEdit)="clicou($event)" >
    </app-design-thumb>    
    `,
})
class TestDesignThumbPageComponent {
  @ViewChildren(DesignThumbComponent) designThumbComps!: QueryList<DesignThumbComponent>
  
  clicou() {

  }
}

describe('DesignThumbComponent', () => {
  let component: TestDesignThumbPageComponent;
  let fixture: ComponentFixture<TestDesignThumbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDesignThumbPageComponent, DesignThumbComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestDesignThumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('numberSlidesToShow é setado para 2 corretamente, de acordo com o número de index no array de array', () => {
    component.designThumbComps.first.ngOnInit();
    expect(component.designThumbComps.first.numberSlidesToShow).toBe(2);
  });
  
  it('caso não tenha slide, numberSlidesToShow é setado para 1', () => {
    component.designThumbComps.last.ngOnInit();
    expect(component.designThumbComps.last.numberSlidesToShow).toBe(1);
  });
});
