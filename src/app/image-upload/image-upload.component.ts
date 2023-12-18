import { Component } from '@angular/core';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent {
  constructor(private imageDataService: ImageDataService) { }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    // Handle file upload logic here, e.g., save to server or local storage
    // For simplicity, we'll just add the file data to the service
    this.imageDataService.addImageData(file);
  }
}
