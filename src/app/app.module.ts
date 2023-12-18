import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    DataGridComponent,
    ImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
