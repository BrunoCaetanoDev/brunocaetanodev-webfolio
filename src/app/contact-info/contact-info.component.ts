import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Email} from '../email/model/email';
import {EmailService} from '../email/service/email.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _emailService: EmailService) { }

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
  }

  sendEmail() {
    let email = new Email();
    email.name = this.firstFormGroup.value.firstCtrl;
    email.company = this.secondFormGroup.value.secondCtrl;
    email.subject = this.thirdFormGroup.value.thirdCtrl;
    email.body = this.fourthFormGroup.value.fourthCtrl;
    this._emailService.sendEmail(email);
  }
}
