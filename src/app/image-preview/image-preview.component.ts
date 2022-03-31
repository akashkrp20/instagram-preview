import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  message: any;
  btnName:any = "Like";
  changedData:any;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.currantMessage.subscribe(message => {
      this.message = message;
      if(this.changedData != undefined){
        if(this.changedData.Image != this.message.Image ){
          this.btnName = "Like";
        }
      }


      (document.querySelector('#popup1') as HTMLElement).style.display = 'block';
    });

  }
  closePopup(){
    (document.querySelector('#popup1') as HTMLElement).style.display = 'none';
  }
  like(){
    if(this.btnName == "Like"){
      let array = [this.message];
    let objIndex = array.findIndex((obj => obj.likes));
    array[objIndex].likes = array[objIndex].likes+1;
    this.btnName = "Dislike";
    this.changedData = array[objIndex];
    this.dataService.changeMessage(array[objIndex]);
    }else{
      let array = [this.message];
    let objIndex = array.findIndex((obj => obj.likes));
    array[objIndex].likes = array[objIndex].likes-1;
    this.btnName = "Like";
    this.dataService.changeMessage(array[objIndex]);
    }
 
  }

}
