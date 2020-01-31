import {Component, OnInit} from '@angular/core';
import {CuriosityCameras, OpportunityAndSpiritCameras, RoverNames} from './rover.lists';
import {RoverService} from './rover.service';
import {Photo} from './photo';

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
  curiosityCameras = [
    CuriosityCameras.FHAZ,
    CuriosityCameras.RHAZ,
    CuriosityCameras.MAST,
    CuriosityCameras.CHEMCAM,
    CuriosityCameras.MAHLI,
    CuriosityCameras.NAVCAM
  ];
  opportunityAndSpiritCameras = [
    OpportunityAndSpiritCameras.FHAZ,
    OpportunityAndSpiritCameras.RHAZ,
    OpportunityAndSpiritCameras.NAVCAM,
    OpportunityAndSpiritCameras.PANCAM,
    OpportunityAndSpiritCameras.MINITES
  ];
  camerasByRover = {
    curiosity: this.curiosityCameras,
    opportunity: this.opportunityAndSpiritCameras,
    spirit: this.opportunityAndSpiritCameras
  };
  noPhotos = false;
  noPhotosError = 'There were no photos that matched your search, try again.';
  serviceUnavailable = false;
  serviceUnavailableError = 'We can\'t reach the Rover Photos service at the moment :(';
  currentCameraList = this.camerasByRover.curiosity;
  currentPhotos: Photo[] = [];
  camerasFromSearchResults: [];
  currentRover = 'curiosity';
  currentCamera = this.curiosityCameras[0];
  currentPage = 1;
  currentSol = 100;

  constructor(private roverService: RoverService) {
    this.getInput(this.currentRover, this.currentCamera, this.currentSol, this.currentPage);
  }

  ngOnInit() {
  }

  setRover(rover) {
    this.currentRover = rover;
    this.currentCameraList = this.camerasByRover[rover];
  }

  async getInput(
    rover: string,
    camera: string,
    sol?: any,
    page?: any
  ): Promise<void> {
    this.noPhotos = false;
    this.currentCamera = camera as any;

    (!page) ? this.currentPage = 1 : this.currentPage = page;

    if (!sol) {
      alert('Please enter a sol.');
      return;
    } else {
      this.currentSol = sol;
    }

    await this.roverService.getRoverResponse(rover as string, this.currentPage, sol as string, camera as string)
      .subscribe(
        res =>  this.showData({ ...res.body }),
        (error) => this.displayError(error));
    return;
  }

  displayError(error) {
    console.log(error);
    this.serviceUnavailable = true;
  }

  showData(data) {
    this.serviceUnavailable = false;
    if (data.photos.length > 0) {
      this.currentPhotos = data.photos as Photo[];
      this.camerasFromSearchResults = this.currentPhotos[0].rover.cameras;
    } else {
      this.noPhotos = true;
      this.currentPhotos = [];
    }
    console.log(data);
    console.log(`Page: ${this.currentPage}`);
  }
}
