import { Injectable } from '@angular/core';
import { Profile} from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly _profile: Profile;

    constructor( ) {
      this._profile = new Profile();
      this._profile.name = 'Bruno';
      this._profile.surname = 'Caetano';
      // this._profile.image = "https://res.cloudinary.com/dnku44rpm/image/upload/v1544614965/profile.png";
       this._profile.image = 'https://res.cloudinary.com/dnku44rpm/image/upload/v1544738703/profile.png';
      // this._profile.image = 'https://res.cloudinary.com/dnku44rpm/image/upload/v1544740577/profile_custom.png';
      this._profile.birthday = '15 November';
      this._profile.birthplace = 'Sintra';
      this._profile.nationality = 'Portuguese';
    }

  public get profile(): Profile {
    return this._profile;
  }

}
