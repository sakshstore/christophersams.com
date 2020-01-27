import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class  RoverService {
  // I'll switch to this once I add the service to my website
  // roverUrl = 'https://christophersams.com/nasa_oapi_service/rover.php';
  roverData = {};

  constructor(private http: HttpClient) {}

  getRoverResponse(rover: string, page: string, sol: string, camera?: string): Observable<HttpResponse<unknown>> {
    let roverUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    roverUrl += `${rover}/photos?page=${page}`;
    if (camera) {
      roverUrl += `&camera=${camera}`;
    }
    if (sol) {
      roverUrl += `&sol=${sol}`;
    }
    roverUrl += `&api_key=JCSwd1cT7mVu4SJRFG889caSY58fA9YfSeiQbX5F`;
    return this.roverData = this.http.get(roverUrl, { observe: 'response' });
  }
}
