import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  images: Observable<any[]>;

  constructor(private firebase: AngularFirestore) { 
    this.images = this.firebase.collection('images').valueChanges()
  }

  postImage(data: any){
    return this.firebase.collection('images').add({data})
  }

  getImages(){
    return this.images;
  }

  messageSuccess(message: any) {
    const Toast = this.init();
    Toast.fire({
      icon: 'success',
      title: `${message}`,
    });
  }

  messageError(message: any) {
    const Toast = this.init();
    Toast.fire({
      icon: 'error',
      title: `${message}`,
    });
  }

  init() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      willOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    return Toast;
  }
}
