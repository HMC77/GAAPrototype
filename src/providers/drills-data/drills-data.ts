import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the DrillsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const STORAGE_KEY = 'favoriteFilms';

@Injectable()
export class DrillsDataProvider {

//temp code to show json data
//drills:any;
//data:any;
  constructor(
    public http: Http, 
    public storage: Storage)
     {
    console.log('Hello DrillsDataProvider Provider');
  }

//Retrieves data from the json file : 
//It returns an Obserable which we subscribe to, to get the data we want
//Then use the map operator to convert the response into json data we can use.

 getRemoteData(){
    return this.http.get('../assets/data/data.json')
    .map(res=>res.json());
    //.subscribe(data=>console.log(data));
  }

//HMC Temp Code To favorite a film, we need to retrieve the list of all films already inside the storage
// and then either add the film or set a completely new object if nothing is there yet.

isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }
 
  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }
 
  unfavoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }
}


