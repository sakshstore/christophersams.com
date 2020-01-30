import { Component, OnInit } from '@angular/core';
import { ApodService } from './apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  apodData: {};
  copyright: string;
  imageUrl: string;
  vidUrl: string;
  explanation: string;
  title: string;
  serviceUnavailable = false;
  serviceUnavailableError = 'We can\'t reach the Astronomy Photo of the Day service at the moment :(';

  constructor(private apodService: ApodService) { }

  async subscribeToApodService(): Promise<void> {
    await this.apodService.getApodResponse()
      .subscribe(
        res => this.showData({ ...res.body }),
        (error) => this.displayError(error));
  }

  ngOnInit() {
    // @ts-ignore
    this.subscribeToApodService();
  }

  displayError(error) {
    console.log(error);
    this.serviceUnavailable = true;
  }

  showData(data) {
    this.apodData = data;
    try {
      // @ts-ignore
      this.copyright = this.apodData.copyright;
    } catch {
      this.copyright = 'Image Credits: Public Domain';
    }

    // @ts-ignore
    if (this.apodData.media_type === 'video') {
      // @ts-ignore
      this.vidUrl = this.apodData.hdurl;
    } else {
      // @ts-ignore
      this.imageUrl = this.apodData.hdurl;
    }
    try {
      // @ts-ignore
      this.explanation = this.apodData.explanation;
      // @ts-ignore
      this.title = this.apodData.title;
    } catch {
      this.explanation = '';
      this.title = '';
    }
  }
}
