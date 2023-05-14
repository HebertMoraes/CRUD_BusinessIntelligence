import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.sass']
})
export class ModuleContentComponent {

  @Input() circleBgPath!: string;
  @Input() imageCenterPath!: string;
  @Input() textTittle!: string;
  @Input() colorDivisorTittle!: string;
  @Input() widthImageCenter: string = "240px";
  @Input() heightImageCenter: string = "234px";
  @Input() marginLeftImageCenter: string = "10px";
  @Input() marginTopImageCenter: string = "0px";

  @Output() clicked = new EventEmitter();
}
