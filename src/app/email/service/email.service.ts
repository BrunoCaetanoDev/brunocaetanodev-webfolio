import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Email} from '../model/email';

import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail (email: Email) {
    console.log(email.toJSON());

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(environment.nodemailer_url, email, httpOptions).subscribe(resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

}
