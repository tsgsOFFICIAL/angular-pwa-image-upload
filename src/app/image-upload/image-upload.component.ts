import { Component } from '@angular/core';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  constructor(private imageDataService: ImageDataService) { }

  onFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      // Use a regular expression to match against "image/*"
      const imageTypeRegex = /^image\//;

      if (imageTypeRegex.test(file.type)) {
        // Valid image file type, add the file data to the service
        this.imageDataService.addImageData(file);
      } else {
        // Invalid file type, display an error message or take appropriate action
        console.log('Invalid file type. Please select a valid image file.');
        // Reset the file input
        event.target.value = null;
      }
    }
  }
}
