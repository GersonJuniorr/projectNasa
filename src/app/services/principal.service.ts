import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  URL_API = "https://api.nasa.gov/planetary/apod?api_key=p3dT45wuVDJn8V8tWCaxvOcXLZBP1e2XgbzzJBfI"


  constructor(private http: HttpClient) {}

  getPicture() {
    return this.http.get(`${this.URL_API}&date=2021-12-31`)
  }
}
