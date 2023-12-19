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
    this.selectedRow = { ...row, originalImageUrl: URL.createObjectURL(row.file) };
  }

  closeDialog(): void {
    this.selectedRow = null;
  }

  getThumbnailUrl(row: any): string {
    return URL.createObjectURL(row.file);
  }

  fileNameWithoutExtension(row: any): string {
    return row.file.name.replace(/\.[^/.]+$/, "");
  }
}
