import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Email} from '../email/model/email';
import {EmailService} from '../email/service/email.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  showProgressSpinner: boolean;
  showMessage: boolean;
  success: boolean;
  disableBtn: boolean;

  constructor(private _formBuilder: FormBuilder, private _emailService: EmailService) {
    _emailService.done.subscribe((done: boolean) => {
      this.showProgressSpinner = !done;
      if (done) {
        this.success = this._emailService.success;
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
          this.disableBtn = false;
        }, 5000);
      }
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.showProgressSpinner = false;
    this.showMessage = false;
    this.disableBtn = false;
  }

  sendEmail() {
    const email = new Email();
    email.name = this.firstFormGroup.value.firstCtrl;
    email.company = this.secondFormGroup.value.secondCtrl;
    email.subject = this.thirdFormGroup.value.thirdCtrl;
    email.body = this.fourthFormGroup.value.fourthCtrl;
    this.disableBtn = true;
    this._emailService.sendEmail(email);
  }
}
