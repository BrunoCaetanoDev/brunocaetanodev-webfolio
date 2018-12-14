import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Email} from '../model/email';

import { environment } from '../../../environments/environment.prod';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _done = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  get done() {
    return this._done;
  }

  set done(value: Subject<boolean>) {
    this._done = value;
  }

  public sendEmail (email: Email) {
    this.done.next(false);
    console.log(email.toJSON());

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(environment.nodemailer_url, email, httpOptions).subscribe(resp => {
        console.log(resp);
        this.done.next(true);
      },
      error => {
        console.log(error);
        this.done.next(true);
      }
    );
  }

}
