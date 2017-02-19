import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MarkerService{
  constructor(private _http: Http){};

  getMarkers(){
    return this._http.get('http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=59.87903');
  }

  getDetailInfo(id){
    return this._http.get('http://api.dev.aispot.no/lighthouse/content/' + id);
  }
}