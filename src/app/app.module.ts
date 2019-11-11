import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoverComponent } from './rover/rover.component';
import { ApodComponent } from './apod/apod.component';
import { ReaditComponent } from './readit/readit.component';
import { PwgenComponent } from './pwgen/pwgen.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { PageComponent } from './page/page.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ApodService} from './apod/apod.service';

@NgModule({
  declarations: [
    AppComponent,
    RoverComponent,
    ApodComponent,
    ReaditComponent,
    PwgenComponent,
    ToolbarComponent,
    TerminalComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ApodService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
