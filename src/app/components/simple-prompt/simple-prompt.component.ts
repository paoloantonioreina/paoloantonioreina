import { StorageService } from './../../services/storage.service';
import { image } from './../../models/image.model';
import { TourscannerService } from './../../services/tourscanner.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { response } from 'src/app/models/response.model';

@Component({
  selector: 'app-simple-prompt',
  templateUrl: './simple-prompt.component.html',
  styleUrls: ['./simple-prompt.component.css']
})
export class SimplePromptComponent implements OnInit {

  public loader = false;
  public error = '';
  public bookmarkedTimes = 0;
  public folderName ='';
  folders: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<SimplePromptComponent>,
    private storage: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: image,
    private api: TourscannerService
  ) { }


  ngOnInit() {
    this.askTosave();
  }
  /**
   * save data to server after success response save the image data in the localStorage
   */
  public savePicture() {
    this.loader = true;
    this.api.savePicture(this.data.image_id).subscribe(
      (data:response) => {
        if (data.success) {
           this.storage.saveToStorage(this.data, this.folderName);
        } else {
          // this is an error if API has 200 http status API cant responce success = 0
          // anyway we must handle it
          this.error ='something went wrong';
        }
        this.loader = false;
        this.dialogRef.close();
      },
      (error:any) => {
        // we dont know the error response format !!
        this.error ='something went wrong';
      }

      );
  }

  /**
   * check how many times image has saved
   */
  public askTosave() {
    this.loader = true;
    this.api.askToSave(this.data.image_id).subscribe((data:number)=>{
      this.bookmarkedTimes = data;
      this.loader = false;
    }, (error) => {
       // we dont know the error response format !!
      this.loader = false;
      this.error = 'something went wrong';
    });
  }

}
