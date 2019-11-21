import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mandelbrot',
  templateUrl: './mandelbrot.component.html',
  styleUrls: ['./mandelbrot.component.scss']
})
export class MandelbrotComponent implements OnInit {
  zoom = 120;
  slideX = -2.5;
  slideY = -2.5;
  iterations = 50;

  @ViewChild('mandelbrotCanvas', { static: false }) mandelbrotCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  }

  calculate(zoom, iterations, slideX, slideY): void {
    this.zoom = parseFloat(zoom);
    this.iterations = parseFloat(iterations);
    this.slideX = parseFloat(slideX);
    this.slideY = parseFloat(slideY);
    this.context.clearRect(0, 0, 600, 600);

    for (let x = 0; x < 600; x++) {
      for (let y = 0; y < 600; y++) {
        let i = 0;
        const cx = this.slideX + x / zoom;
        const cy = this.slideY + y / zoom;
        let zx = 0;
        let zy = 0;

        do {
          const xt = zx * zy;
          zx = zx * zx - zy * zy + cx;
          zy = 2 * xt + cy;
          i++;
        }
        while (i < this.iterations && (zx * zx + zy * zy) < 4);

        const color = i.toString(16);
        this.context.beginPath();
        this.context.rect(x, y, 1, 1);
        this.context.fillStyle = '#' + color + '00' + color;
        this.context.fill();
      }
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.context = this.mandelbrotCanvas.nativeElement.getContext('2d');
    this.calculate(this.zoom, this.iterations, this.slideX, this.slideY);
  }
}
