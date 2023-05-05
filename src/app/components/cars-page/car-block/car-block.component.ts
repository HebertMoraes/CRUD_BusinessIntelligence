import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-block',
  templateUrl: './car-block.component.html',
  styleUrls: ['./car-block.component.sass']
})
export class CarBlockComponent {
  @Input() defaultImage!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() value!: number;
  @Input() description!: string;
}
