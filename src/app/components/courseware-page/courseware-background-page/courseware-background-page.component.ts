import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DesignData } from 'src/app/entities/design-data';
import { DesignService } from '../../../services/design.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-courseware-background-page',
  templateUrl: './courseware-background-page.component.html',
  styleUrls: ['./courseware-background-page.component.sass']
})
export class CoursewareBackgroundPageComponent {

  designsThumbsToShow!: DesignData[];

  constructor(
    public designService: DesignService,
    private router: Router) {

  }

  ngOnInit() {
    this.getAllDesignThumbs();
  }

  ngAfterViewInit() {
    // this.getAllDesignThumbs();
  }

  backOnWeeks(){
    console.log('voltando');
  }

  forwardOnWeeks(){
    console.log('prosseguindo');
  }

  getAllDesignThumbs() {
    this.designService.getAllDesign(10, "created_at", "desc").subscribe({
      next: (res) => {
        this.designsThumbsToShow = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToEditDesign(idDesign: string) {
    window.open(environment.urlEditDesign + idDesign, "_blank");
  }

  goToSeeAllDesign(){
    this.router.navigate(['ver-todos-materiais']);
  }

  goToYtChannel() {
    window.open("https://www.youtube.com/@PrefeituradePenedo", "_blank");
  }
}
