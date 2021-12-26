import { StorageService } from './../../services/storage.service';
import { SimplePromptComponent } from './../simple-prompt/simple-prompt.component';
import { TourscannerService } from './../../services/tourscanner.service';
import { image } from './../../models/image.model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HostListener } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: Array<image>;
  public loader = false;
  public error: string ='';
  public folders= [];
  public folder = 'main';
  public class = '';


  constructor(
    public dialog: MatDialog,
    private api: TourscannerService,
    private storage: StorageService
  ) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;

        this.class = (verticalOffset > 40) ? 'bottomside' : '';
         console.log(verticalOffset);
  }

  ngOnInit() {
    this.folders = this.storage.listFolders();
    this.getImages();
  }

  public setTab(tab: MatTabChangeEvent) : void {
     if (tab.index > 0) {
      this.folder =  tab.tab.textLabel;
     }
     else {
       this.folder = 'main';
     }
  }

  getImages(): void {
    this.loader = true;
    this.api.getImages().subscribe(
      (data: Array<image>) => {
        this.loader = false;
        this.images = data;
      },
      (error:any) => {
        this.loader = false;
        this.error = 'something went wrong';
      }
    );
  }

   imageBookMark(image: image): void {
      const dialogRef = this.dialog.open(SimplePromptComponent, {
        data: image,
      });

      dialogRef.afterClosed().subscribe(result => {
        this.folders = this.storage.listFolders();
        this.getImages();
      });
    }

    public listImage(folder) {
      return this.storage.folderItems(folder);
    }

}
