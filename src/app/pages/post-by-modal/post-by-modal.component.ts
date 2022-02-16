import { AfterViewInit, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagesService } from 'src/app/utils/core/services/images.service';

@Component({
  selector: 'app-post-by-modal',
  templateUrl: './post-by-modal.component.html',
  styleUrls: ['./post-by-modal.component.scss'],
})
export class PostByModalComponent implements AfterViewInit {

  data: any;
  loading: boolean;

  constructor( private imageService: ImagesService, private modalService: NgbModal ) { }

  async ngAfterViewInit() {
    this.getImages();
  }

  getImages(){
    this.loading =true
    this.imageService.getImages().subscribe( (res:any) =>{
      this.loading = false;
      this.data = res;
    }, (error: any) =>{
      this.loading = false;
      console.log(error)
    })
  }

  open(content) {
    this.modalService.open(content).result.then(() => {}, () => {});
  }

  receiverImages(data: any){
    this.imageService.postImage(data).then( () =>{
      this.imageService.messageSuccess('Picture added succesfully')
    }, (error : any) =>{
      this.imageService.messageError(error)
    });
  }

}