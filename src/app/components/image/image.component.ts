import { image } from './../../models/image.model';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() id:number;
  @Input() src:string = '';
  @Input() title:string = '';
  @Output() save: EventEmitter<image> = new EventEmitter<image>();

  public isSaved = false;

  constructor(
    private storage: StorageService
  ) {
  }

  ngOnInit() {
    // check if the image already saved
    this.isSaved = this.storage.isSaved(this.id);
  }
  /**
   * emit the event as an image object
   */
  saveImage() {
      this.save.emit({image_id: this.id, url: this.src, title: this.title});
  }

}
