import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-background-page',
  templateUrl: './opening-background-page.component.html',
  styleUrls: ['./opening-background-page.component.sass']
})
export class OpeningBackgroundPageComponent {

  constructor(public router: Router){

  }

  goToCoursewarePage(){
    this.router.navigateByUrl('/materiais-didaticos');
  }
}
