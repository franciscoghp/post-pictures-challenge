import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  WIDTH :number;
  HEIGHT :number;

  error: any;
  isCaptured: boolean;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  @Output() setImgages = new EventEmitter<any>();

  async ngAfterViewInit() {
    await this.setupDevices();
    const element = document.querySelector('.video-container')
    this.WIDTH = element.clientWidth
    this.HEIGHT = element.clientWidth/1.333333333
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    const newImage = this.canvas.nativeElement.toDataURL("image/png");
    this.isCaptured = true;
    this.setImgages.emit(newImage)
  }

  removeCurrent() {
    this.isCaptured = false;
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, image.offsetWidth, image.offsetHeight);
  }
}
