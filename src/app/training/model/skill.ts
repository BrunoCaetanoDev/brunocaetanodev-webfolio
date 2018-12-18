export class Skill {

  private _name :string;
  private _category : string[];
  private _description :string;
  private _score :number;
  private _image :string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get category(): string[] {
    return this._category;
  }

  set category(value: string[]) {
    this._category = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

}
