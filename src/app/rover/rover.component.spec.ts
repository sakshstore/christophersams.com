import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoverComponent } from './rover.component';
import {RoverService} from './rover.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RoverComponent', () => {
  let component: RoverComponent;
  let fixture: ComponentFixture<RoverComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ RoverService, HttpClient, HttpHandler ],
      declarations: [ RoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pulls in the rover names', () => {
    expect(component.roverNames).toBeDefined();
    expect(component.roverNames.length).toEqual(3);
  });

  it('sets noPhotos to false', () => {
    expect(component.noPhotos).toBeDefined();
    expect(component.noPhotos).toBeFalsy();
  });

  it('sets noPhotosError', () => {
    expect(component.noPhotosError).toBeDefined();
    expect(typeof component.noPhotosError === 'string').toBeTruthy();
  });

  it('calls showData', () => {
    spyOn(component, 'showData');
    component.showData({});
    expect(component.showData).toHaveBeenCalled();
  });

  it('sets the noPhotos property to false when valid input is provided to getInput', () => {
    spyOn(component, 'showData');
    component.getInput('curiosity', '100', 'FHAZ', '1');
    expect(component.noPhotos).toBeFalsy();
  });

  it('sets the noPhotos property to false when no photos are passed to showData', () => {
    component.showData({photos: []});
    expect(component.noPhotos).toBeTruthy();
  });

  it('calls getInput', () => {
    spyOn(component, 'getInput');
    component.getInput('curiosity', 'FHAZ');
    expect(component.getInput).toHaveBeenCalled();
  });

  it('sets serviceUnvailable to true if called with error', () => {
    spyOn(component, 'displayError');
    component.displayError({});
    expect(component.serviceUnavailable).toBeTruthy();
  });

  it('sets the rover and cameraList when setRover is called', () => {
    component.setRover('spirit');
    expect(component.currentRover).toEqual('spirit');
    expect(component.currentCameraList.length === component.camerasByRover.spirit.length).toBeTruthy();
  });

  it('sets the curiosityCameras on init', () => {
    expect(component.curiosityCameras).toBeDefined();
    expect(component.curiosityCameras.length).toEqual(6);
  });

  it('sets the opportunityOrSpiritCameras on init', () => {
    expect(component.opportunityAndSpiritCameras).toBeDefined();
    expect(component.opportunityAndSpiritCameras.length).toEqual(5);
  });

  it('sets the page on init', () => {
    expect(component.currentPage).toBeDefined();
    expect(component.currentPage).toEqual(1);
  });

  it('sets the sol on init', () => {
    expect(component.currentSol).toBeDefined();
    expect(component.currentSol).toEqual(100);
  });
});
