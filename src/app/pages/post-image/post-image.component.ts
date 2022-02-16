import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ImagesService } from 'src/app/utils/core/services/images.service';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements AfterViewInit{

  WIDTH = 640;
  HEIGHT = 480;
  loading: boolean;

  constructor( private imageService: ImagesService ) { }

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  captures:any = [];
  error: any;
  isCaptured: boolean;

  getImages(){
    this.loading = true;
    console.log('pa ve pa dentro', this.loading)
    this.imageService.getImages().subscribe( (res:any) =>{
      this.loading = false;
      this.captures = res
      console.log(this.captures.length , this.loading)
    }, (error: any) =>{
      this.loading = false;
      console.log(error)
    })
  }

  async ngAfterViewInit() {
    await this.setupDevices();
    this.getImages();
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
        console.log(e)
      }
    }
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    const newImage = this.canvas.nativeElement.toDataURL("image/png");
    
    this.isCaptured = true;
    this.imageService.postImage(newImage).then( (res: any) =>{
      this.imageService.messageSuccess('Picture added succesfully')
    }, (error : any) =>{
      console.log(error)
      this.imageService.messageError(error)
    });
  }

  removeCurrent() {
    this.isCaptured = false;
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }



}