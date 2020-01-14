import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class  ApodService {
  apodUrl = 'https://christophersams.com/nasa_oapi_service/apod.php';
  apodData = {};

  constructor(private http: HttpClient) {}

  getApodResponse(): Observable<HttpResponse<unknown>> {
    return this.apodData = this.http.get(this.apodUrl, { observe: 'response' });
  }
}
