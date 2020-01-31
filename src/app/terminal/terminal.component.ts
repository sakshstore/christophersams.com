import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  about     = 'Hello everyone and welcome to my website. The purpose of this site' +
    ' is to display my programming skills.  This site is a single page web app built' +
    ' using Angular.  Feel free to check out my other projects or reach out to me. :)';

  projects  = [
    {
      name: 'rover',
      text: 'Mars Rover Photo Search Engine',
      link: '/rover',
      title: 'Search engine for photos taken by the Mars rovers.  Powered by NASA\'s Open API'
    },
    {
      name: 'pwgen',
      text: 'Secure Password Generator',
      link: '/pw',
      title: 'Simple app for generating a random, secure password.'
    },
    {
      name: 'apod',
      text: 'Astronomy Picture of the Day',
      link: '/apod',
      title: 'NASA\'s Astronomy Picture of the day.  Powered by NASA\'s Open API'
    },
    {
      name: 'mandelbrot',
      text: 'Mandelbrot Set Fractal Visualizer',
      link: '/fractals',
      title: 'A fun applet for visualizing the Mandelbrot set as a fractal image and interacting with it.'
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

  constructor() { }

  ngOnInit() {
  }

}
