
import { image } from './../models/image.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  STKEY: string =  'list';

  /**
   * Save an image to localstorage
   * @param image
   * @param folderName
   */
  public saveToStorage(image : image, folderName: string): void {
    let list: Array<any> = JSON.parse(localStorage.getItem(this.STKEY));
    if (!list) {
      list = [];
    }
    list.push({
      image_id : image.image_id,
      url: image.url,
      title: image.title,
      folder:folderName,
    });
    localStorage.setItem(this.STKEY ,JSON.stringify(list));
  }
  /** list all folders */
  public listFolders(): Array<string> {
    const items = localStorage.getItem(this.STKEY);
    if (items) {
      const list: Array<any> = JSON.parse(items);
      const g =_.groupBy(list, 'folder');
      return Object.keys(g);
    }
    return [];
  }
  /**
   * List images on a folder
   * @param folder
   * @returns Array<image>
   */
  public folderItems(folder): Array<image> {
    const items = localStorage.getItem(this.STKEY);
    if (items) {
      return _.filter(JSON.parse(items), { 'folder': folder});
    }
    return [];
  }

  public isSaved(id): boolean {
    const items = localStorage.getItem(this.STKEY);
    if (items) {
    return   ( _.findIndex(JSON.parse(items), { image_id : id}) > -1) ? true : false ;
    }
    return false;
  }

}
