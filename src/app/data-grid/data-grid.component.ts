import { Component } from '@angular/core';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent {
  selectedRow: any;

  constructor(private imageDataService: ImageDataService) { }

  get imageData(): any[] {
    return this.imageDataService.imageData;
  }

  showDetailsDialog(row: any): void {
    this.selectedRow = { ...row }; // Ensure it's a copy of the object
  }

  closeDialog(): void {
    this.selectedRow = null;
  }

  getThumbnailUrl(row: any): string {
    // Replace 'original' with the logic to generate a thumbnail URL based on the original image URL
    // For simplicity, we assume the original image is in the same folder
    const originalUrl = row.file.name;
    return originalUrl.replace('original', 'thumbnail'); // Replace 'original' with the appropriate path or logic
  }
}
