import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : Profile;

  ngOnInit() {
    this.profile = new Profile();
    this.profile.name = "Bruno";
    this.profile.surname = "Caetano";
    this.profile.image = "profile.png";
    this.profile.birthday = "15 November";
    this.profile.birthplace= "Sintra";
    this.profile.nationality= "Portuguese";


  }

}
