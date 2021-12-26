import { image } from './../models/image.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TourscannerService {

  API_BASE: string = '/api';

  constructor(
    private injector: Injector,
  ) {
  }
  /**
   * get images from the server
   * @returns observable
   */
  public getImages() {
    const resource = 'interview/images';
    const ServiceHeaders = this.getHeaders();
    const options = { headers: ServiceHeaders };
    return this.injector.get(HttpClient).get(`${this.API_BASE}/${resource}`, options);
  }
  /**
   * Ask how many times the image was bookmarked
   * @param imageId
   * @returns observable
   */
  public askToSave(imageId) {
     const resource = `interview/save_image/${imageId}`;
     const ServiceHeaders = this.getHeaders();
     const options = { headers: ServiceHeaders };
     return this.injector.get(HttpClient).get(`${this.API_BASE}/${resource}`, options);
  }

  public savePicture(imageId) {
    const resource = `interview/save_image/${imageId}`;

    return this.injector.get(HttpClient).post(`${this.API_BASE}/${resource}`, null,
    {headers:     {'Content-Type': 'application/json' } });
  }
  /**
   * Return the http header of the request
   * @returns HttpHeaders
   */
  public getHeaders(): HttpHeaders  {
    const header = new HttpHeaders({

      // no header
   //   'Content-Type': 'application/json',
     // Accept : 'application/json',
    });
    return header;
  }
}
