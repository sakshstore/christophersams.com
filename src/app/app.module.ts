import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoverComponent } from './rover/rover.component';
import { ApodComponent } from './apod/apod.component';
import { ReaditComponent } from './readit/readit.component';
import { PwgenComponent } from './pwgen/pwgen.component';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApodService } from './apod/apod.service';
import { MandelbrotComponent } from './mandelbrot/mandelbrot.component';
import { RoverService } from './rover/rover.service';

const appRoutes: Routes = [
  { path: 'home', component: TerminalComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'pwgen', component: PwgenComponent },
  { path: 'fractals', component: MandelbrotComponent },
  { path: 'rover', component: RoverComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: TerminalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoverComponent,
    ApodComponent,
    ReaditComponent,
    PwgenComponent,
    ToolbarComponent,
    TerminalComponent,
    MandelbrotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ ApodService, RoverService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
