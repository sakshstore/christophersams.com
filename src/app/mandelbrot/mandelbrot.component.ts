import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mandelbrot',
  templateUrl: './mandelbrot.component.html',
  styleUrls: ['./mandelbrot.component.scss']
})
export class MandelbrotComponent implements OnInit {
  setA: [number] = [];
  setB: [number] = [];

  @ViewChild('mandelbrotCanvas', { static: false }) mandelbrotCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    for (let x = 0; x < 600; x++) {
        this.setA.push(2 / x);
        this.setB.push(-2 / x);
    }
  }

  caluclate(): void {
    for (let x = 0; x < 600; x++) {
      for (let y = 0; y < 600; y++) {
        let i = 0;
        const cx = -2.5 + x / 50;
        const cy = -2.5 + y / 50;
        let zx = 0;
        let zy = 0;

        do {
          const xt = zx * zy;
          zx = zx * zx - zy * zy + cx;
          zy = 2 * xt + cy;
          i++;
        }
        while (i < 255 && (zx * zx + zy * zy) < 4);

        const color = i.toString(16);
        this.context.beginPath();
        this.context.rect(x, y, 1, 1);
        this.context.fillStyle = '#' + color + color + color;
        this.context.fill();
      }
    }
  }

  draw(x, y, color): void {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, 1, 1);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.context = this.mandelbrotCanvas.nativeElement.getContext('2d');
    this.caluclate();
  }
}
