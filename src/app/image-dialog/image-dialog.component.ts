import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.css'
})
export class ImageDialogComponent {
  @Input() data: any;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
  isAnimating = false;

  constructor(private elementRef: ElementRef) { }

  startClosingAnimation(): void {
    this.isAnimating = true;
    this.elementRef.nativeElement.addEventListener('transitionend', this.onTransitionEnd);
  }

  onTransitionEnd = (): void => {
    if (this.isAnimating) {
      this.isAnimating = false;
      this.elementRef.nativeElement.removeEventListener('transitionend', this.onTransitionEnd);
      this.onDialogClosed();
    }
  };

  onDialogClosed(): void {
    this.closeDialog.emit();
  }

  fileSizeInMB(): number {
    console.log(this.data.file);

    return this.data.file.size / (1024 * 1024); // Convert bytes to megabytes
  }

  fileNameWithoutExtension(): string {
    return this.data.file.name.replace(/\.[^/.]+$/, '');
  }

  fileType(): string {
    return this.data.file.type.replace(/^.*\//, '');
  }
}
