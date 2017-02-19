import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { MapComponent } from './sections/map/map.component';

import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDw0pPJR6UQt-agtfsF8qqi2TYqA37J8LU'
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
