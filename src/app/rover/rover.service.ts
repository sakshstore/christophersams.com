import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class  RoverService {
  roverData = {};

  constructor(private http: HttpClient) {}

  getRoverResponse(rover: string, page: string, sol: string, camera?: string): Observable<HttpResponse<unknown>> {
    let roverUrl = 'https://christophersams.com/nasa_oapi_service/rover.php';
    roverUrl += `?rover=${rover}`;
    roverUrl += `&page=${page}`;
    if (camera) {
      roverUrl += `&camera=${camera}`;
    }
    if (sol) {
      roverUrl += `&sol=${sol}`;
    }
    return this.roverData = this.http.get(roverUrl, { observe: 'response' });
  }
}
