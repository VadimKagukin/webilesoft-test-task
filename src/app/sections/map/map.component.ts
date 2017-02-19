import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

import { MarkerService } from '../../services/marker.service';
import { Marker } from '../../shared/marker';
import { Place } from '../../shared/place';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 59.879037;
  lng: number = 59.87903;

  isClicked: boolean;
  lastClicked: SebmGoogleMapInfoWindow;

  markers: Marker[];
  place: Place;

  constructor(private _markerService: MarkerService){}

  ngOnInit(){
    this._markerService.getMarkers().subscribe((data: Response) => this.markers = data.json());
  }

  getDetailInfo(id: number){
    this._markerService.getDetailInfo(id).subscribe((data: Response) => this.place = data.json());
  }

  updateDiv(infoWindow) {
    if (this.lastClicked && this.lastClicked !== infoWindow){
      this.lastClicked.close();
    }
    this.lastClicked = infoWindow;
  }

  mapClicked($event: MouseEvent) {
    this.isClicked = false;
    if(this.lastClicked) {
       this.lastClicked.close();
       this.lastClicked = null;
    }
  }
}