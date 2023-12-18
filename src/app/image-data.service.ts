import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imageData: any[] = [];

  addImageData(file: File): void {
    // For simplicity, we'll just add the file data to the array
    this.imageData.push({
      file,
      // Add additional properties like height, width, filesize, etc.
    });
  }

  // Implement additional methods as needed
}
