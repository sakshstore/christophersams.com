import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { PwgenComponent } from './pwgen/pwgen.component';
import {RoverComponent} from './rover/rover.component';
import {ApodComponent} from './apod/apod.component';
import {ReaditComponent} from './readit/readit.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'rover', component: RoverComponent },
  // { path: 'pwgen', component: PwgenComponent },
  // { path: 'apod', component: ApodComponent },
  // { path: 'readit', component: ReaditComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
