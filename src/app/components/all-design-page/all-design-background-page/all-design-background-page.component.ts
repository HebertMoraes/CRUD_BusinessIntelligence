import { Component } from '@angular/core';
import { DesignData } from 'src/app/entities/design-data';
import { DesignService } from '../../../services/design.service';
import { environment } from '../../../../environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-design-background-page',
  templateUrl: './all-design-background-page.component.html',
  styleUrls: ['./all-design-background-page.component.sass']
})
export class AllDesignBackgroundPageComponent {

  designsThumbsToShow!: DesignData[];

  constructor(public designService: DesignService, public toastr: ToastrService) {

  }

  ngOnInit() {
    this.getAllDesignThumbs();
  }

  getAllDesignThumbs() {
    this.designService.getAllDesign().subscribe({
      next: (res) => {
        this.designsThumbsToShow = res.data;
      },
      error: (err) => {
        this.toastr.error(err);
      }
    });
  }

  goToEditDesign(idDesign: string) {
    window.open(environment.urlEditDesign + idDesign, "_blank");
  }

}
