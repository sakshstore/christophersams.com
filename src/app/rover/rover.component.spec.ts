import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoverComponent } from './rover.component';
import {RoverService} from './rover.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import createSpy = jasmine.createSpy;

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

  it('pulls in the camera names', () => {
    expect(component.allCameras).toBeDefined();
    expect(component.allCameras.length).toEqual(9);
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
    component.getInput('curiosity');
    expect(component.getInput).toHaveBeenCalled();
  });

  it('sets serviceUnvailable to true if called with error', () => {
    spyOn(component, 'displayError');
    component.displayError({});
    expect(component.serviceUnavailable).toBeTruthy();
  });
});
