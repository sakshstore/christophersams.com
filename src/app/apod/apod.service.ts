import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class  ApodService {
  apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=JCSwd1cT7mVu4SJRFG889caSY58fA9YfSeiQbX5F';
  apodData = {};

  constructor(private http: HttpClient) {}

  getApodResponse(): Observable<HttpResponse<unknown>> {
    return this.apodData = this.http.get(this.apodUrl, { observe: 'response' });
  }
}
