import { Injectable } from '@angular/core';
import { Profile} from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly _profile : Profile;

    constructor( ) {
      this._profile = new Profile();
      this._profile.name = "Bruno";
      this._profile.surname = "Caetano";
      this._profile.image = "profile.png";
      this._profile.birthday = "15 November";
      this._profile.birthplace= "Sintra";
      this._profile.nationality= "Portuguese";
    }

  public get profile(): Profile {
    return this._profile;
  }

}
