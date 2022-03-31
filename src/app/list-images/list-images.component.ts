import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {


  urldata:any=[];
  constructor(private dataService : DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getImage().subscribe(res=>{
      console.log(res);
      this.urldata = res
    });

  }
   myFunction(index: any) {
   document.getElementById("myButton"+ index)?.classList.toggle("is-active");
  }

  newMessage(data:any){
    this.dataService.changeMessage(data);
  }

  sortbyLikes(){
    
  }
  changeSort(e:any){
   if(e.target.value == "low"){
    return this.urldata.sort((a: any, b: any) => {
      return <any>new Date(a.likes) - <any>new Date(b.likes);
    });
   }else if(e.target.value == "high"){
    return this.urldata.sort((a: any, b: any) => {
      return <any>new Date(b.likes) - <any>new Date(a.likes);
    });
   }

  }
  


}
