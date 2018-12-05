import {Injectable, OnInit} from '@angular/core';
import { Profile} from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit  {

  public _profile : Profile;

    constructor( ) {
      this._profile.name = "Bruno";
      this._profile.surname = "Caetano";
      this._profile.image = "profile.png";
      this._profile.birthday = "15 November";
    }


  public get profile(): Profile {
    return this._profile;
  }

  ngOnInit(): void {

  }

}
