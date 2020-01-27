import { Component, OnInit } from '@angular/core';
import { RoverCameras, RoverNames } from './rover.lists';
import { RoverService } from './rover.service';
import { Photo } from "./photo";

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss']
})
export class RoverComponent implements OnInit {
  roverNames = [
    RoverNames.curiosity,
    RoverNames.opportunity,
    RoverNames.spirit
  ];
  allCameras = [
    RoverCameras.FHAZ,
    RoverCameras.RHAZ,
    RoverCameras.MAST,
    RoverCameras.CHEMCAM,
    RoverCameras.MAHLI,
    RoverCameras.MARDI,
    RoverCameras.NAVCAM,
    RoverCameras.PANCAM,
    RoverCameras.MINITES
  ];
  noPhotos = false;
  noPhotosError = 'There were no photos that matched your search, try again.';
  rover: string;
  page: number;
  camera: Partial<RoverCameras>;
  sol: number;
  date: string;
  data: any;
  photos: Photo[] = [];
  cameras: [];

  constructor(private apodService: RoverService) {
    this.getInput('curiosity', '100', 'FHAZ', '1');
  }

  ngOnInit() {
  }

  async getInput(
    rover: string,
    sol?: any,
    camera?: string,
    page?: any
  ): Promise<void> {
    if (!page) {
      page = '1';
    }
    if (!sol) {
      alert('Please enter a sol.  This is the number of Mars days since the landing of the selected rover.');
      return;
    }
    if (camera) {
      await this.apodService.getRoverResponse(rover as string, page as string, sol as string, camera)
        .subscribe(res => this.showData({ ...res.body }));
      return;
    } else {
      await this.apodService.getRoverResponse(rover as string, page as string, sol as string)
        .subscribe(res => this.showData({ ...res.body }));
      return;
    }
  }

  showData(data) {
    if (data.photos) {
      this.photos = data.photos as Photo[];
      this.cameras = this.photos[0].rover.cameras;
    }
    console.log(this.photos);
  }
}
