import { TourscannerService } from './services/tourscanner.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { TrasformPipe } from './pipes/trasform.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimplePromptComponent } from './components/simple-prompt/simple-prompt.component';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
// material modules
// generally in complex projects I prefer to load in a separate module
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    GalleryComponent,
    TrasformPipe,
    SimplePromptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  entryComponents: [SimplePromptComponent],
  providers: [TourscannerService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
