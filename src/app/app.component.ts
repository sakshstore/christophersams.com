import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title     = 'christophersams';
  about     = 'Hello everyone and welcome to my website. The purpose of this site' +
    'is to display my programming skills.  This site is a single page webapp built' +
    ' in Angular.  Feel free to check out my other projects or reach out to me. :)';
  projects  = [
    {
      name: 'rover',
      text: 'Mars Rover Photo Search Engine',
      link: '/rover.html', // Todo: Build Rover Search App
      title: 'Search engine for photos taken by the Mars rovers.  Powered by NASA\'s Open API'
    },
    {
      name: 'pwgen',
      text: 'Secure Password Generator',
      link: '/pwgen.html', // Todo: Build Password Generator App
      title: 'Simple app for generating a random, secure password.'
    },
    {
      name: 'apod',
      text: 'Astronomy Picture of the Day',
      link: '/apod.html', // Todo: Build APOD App
      title: 'NASA\'s Astronomy Picture of the day.  Powered by NASA\'s Open API'
    }
  ];
  links     = [
    {
      name: 'github',
      text: 'Github',
      link: 'https://github.com/sanschristo',
    },
    {
      name: 'twitter',
      text: 'Twitter',
      link: 'https://twitter.com/sanschristo',
    },
    {
      name: 'angular',
      text: 'Angular docs',
      link: 'https://angular.io'
    }
  ];
  contacts   = [
    {
      name: 'email',
      text: 'Email',
      link: 'mailto: christophersamswebsite@gmail.com',
    },
    {
      name: 'github',
      text: 'Github',
      link: 'https://github.com/sanschristo',
    },
    {
      name: 'twitter',
      text: 'Twitter',
      link: 'https://twitter.com/sanschristo',
    }
  ];
}
