import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-design-thumb',
  templateUrl: './design-thumb.component.html',
  styleUrls: ['./design-thumb.component.sass']
})
export class DesignThumbComponent {

  @Input() tittle!: string;
  @Input() urlImgThumb!: string;
  @Input() numberSlides!: any;
  @Input() idDesign!: string;
  @Input() widthComponent!: string;

  @Output() goToEdit: EventEmitter<string> = new EventEmitter<string>();

  public numberSlidesToShow!: number;

  ngOnInit() {

    try {
      if(this.numberSlides[0]) {
        this.numberSlidesToShow = this.numberSlides[0].length;
      }
    } catch (error) {
      this.numberSlidesToShow = 1;
    }
  }
}
