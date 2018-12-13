import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Email} from '../email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient) { }

  public sendEmail (email : Email) {
    console.log(email.toJSON());
    //this.http.post("", email, ).subscribe(data => {
    //});
  };

}
