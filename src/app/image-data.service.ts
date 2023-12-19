import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imageData: any[] = [];

  addImageData(file: File): void {
    // Check if the file is already in the array
    const isFileAlreadyAdded = this.imageData.some(data => data.file.lastModified === file.lastModified && data.file.name === file.name && data.file.size === file.size && data.file.type === file.type);

    // If the file is not already in the array, add it
    if (!isFileAlreadyAdded) {
      this.imageData.push({ file });
    }
  }
}