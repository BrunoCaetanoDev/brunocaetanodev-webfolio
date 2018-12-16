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
  private _success: boolean;

  constructor(private http: HttpClient) { }

  get done() {
    return this._done;
  }

  get success(): boolean {
    return this._success;
  }

  public sendEmail (email: Email) {
    this.done.next(false);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post(environment.nodemailer_url, email, httpOptions).subscribe(resp => {
        this.done.next(true);
      },
      error => {
        this.done.next(true);
        if (error.status === 200) {
          this._success = true;
          this.done.next(true);
        } else {
          this._success = false;
          this.done.next(true);
        }
      }
    );
  }

}
