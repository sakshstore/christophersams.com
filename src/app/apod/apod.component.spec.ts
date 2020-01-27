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
});
