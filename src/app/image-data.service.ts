import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imageData: any[] = [];

  addImageData(file: File): void {
    this.imageData.push({ file });
  }
}
