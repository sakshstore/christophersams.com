import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodComponent } from './apod.component';
import { ApodService } from './apod.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ApodService, HttpClient, HttpHandler ],
      declarations: [ ApodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set serviceUnavailableError on init', () => {
    expect(component.serviceUnavailableError).toBeDefined();
    expect(typeof component.serviceUnavailableError === 'string').toBeTruthy();
  });

  it('sets component.apodData when calling showData', () => {
    const dummyData = {
      foo: 'bar'
    };

    component.showData(dummyData);
    expect(component.apodData).toBeDefined();
    expect(component.apodData).toEqual(dummyData);
  });

  it('sets serviceUnavailable to true when displayError is called', () => {
    component.displayError({});
    expect(component.serviceUnavailable).toBeTruthy();
  });
});
