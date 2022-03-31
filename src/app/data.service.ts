import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

private messageSource = new BehaviorSubject<any>("");
currantMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message:any){
    this.messageSource.next(message)
  }

  public getImage(): Observable<any>{
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json");
  }
}
