import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-carrousel',
  templateUrl: './content-carrousel.component.html',
  styleUrls: ['./content-carrousel.component.sass']
})
export class ContentCarrouselComponent {

  @Input() weeksTxt!: string;
  @Input() tittleTxt!: string;
  @Input() subTittleTxt!: string;
  @Input() btnRightTxt!: string;
  @Input() btnRightColor!: string;
  @Input() btnRightColorTxt!: string;
  @Input() btnRightIconPath!: string;
  @Input() maxScrollCarrousel!: number;
  
  @Output() clickedBtnRight = new EventEmitter();

  @ViewChild('slidesScroll') slidesScroll!: ElementRef;

  currentPosCarrousel: number = 0;
  distanceCarrouselMov: number = 50;
  carrouselMoving: boolean = false;

  ngOnInit() {

  }

  scrollToLeft() {
    this.carrouselMoving = true;
    this.slidesScroll.nativeElement.style.transition = "transform 1s";
		if (this.currentPosCarrousel < 0) {
			this.currentPosCarrousel += this.distanceCarrouselMov;
			this.slidesScroll.nativeElement.style.transform = `translateX(${this.currentPosCarrousel}%)`;
		}
  }

  scrollToRight() {
    this.carrouselMoving = true;
    this.slidesScroll.nativeElement.style.transition = "transform 1s";
		if (this.currentPosCarrousel > this.maxScrollCarrousel) {
			this.currentPosCarrousel -= this.distanceCarrouselMov;
			this.slidesScroll.nativeElement.style.transform = `translateX(${this.currentPosCarrousel}%)`;
		}
  }

  stopScroll() {
    this.carrouselMoving = false;
  }
}
