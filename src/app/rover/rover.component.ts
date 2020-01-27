import { Component, OnInit } from '@angular/core';
import { RoverCameras, RoverNames } from './rover.lists';
import { RoverService } from './rover.service';

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
  rover: string;
  page: number;
  camera: Partial<RoverCameras>;
  sol: number;
  date: string;

  constructor(private apodService: RoverService) { }

  ngOnInit() {
  }

  async getInput(
    rover: string,
    sol: any,
    camera?: string,
    page?: any
  ): Promise<void> {
    if (!page) {
      page = '1';
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
    console.log(data);
  }
}
