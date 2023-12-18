import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.css'
})
export class ImageDialogComponent {
  @Input() data: any;
}
