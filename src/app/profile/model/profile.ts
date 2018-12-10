export class Profile {

  private _id : String;
  private _name : String;
  private _surname : String;
  private _birthday : String;
  private _birthplace : String;
  private _nationality : String;
  private _image : String;


  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }

  get birthday(): String {
    return this._birthday;
  }

  set birthday(value: String) {
    this._birthday = value;
  }

  get birthplace(): String {
    return this._birthplace;
  }

  set birthplace(value: String) {
    this._birthplace = value;
  }

  get nationality(): String {
    return this._nationality;
  }

  set nationality(value: String) {
    this._nationality = value;
  }

  get image(): String {
    return this._image;
  }

  set image(value: String) {
    this._image = value;
  }
}
