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

  // it('pulls in the rover names', () => {
  //   expect(component.roverNames).toBeDefined();
  //   expect(component.roverNames.length).toEqual(3);
  // });
  //
  // it('pulls in the camera names', () => {
  //   expect(component.allCameras).toBeDefined();
  //   expect(component.allCameras.length).toEqual(9);
  // });
  //
  // it('sets noPhotos to false', () => {
  //   expect(component.noPhotos).toBeDefined();
  //   expect(component.noPhotos).toBeFalsy();
  // });
  //
  // it('sets noPhotosError', () => {
  //   expect(component.noPhotosError).toBeDefined();
  //   expect(typeof component.noPhotosError === 'string').toBeTruthy();
  // });
});
