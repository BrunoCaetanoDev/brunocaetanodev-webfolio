import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile : Profile;
  private profileService : ProfileService;

  ngOnInit() {
    this.profile = this.profileService.profile;
  }

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }
}
