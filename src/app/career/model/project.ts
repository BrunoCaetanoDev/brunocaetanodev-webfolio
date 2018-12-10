export class Project {

  private _id : string;
  private _client : string;
  private _department : string;
  private _startMonth : string;
  private _startYear : string;
  private _description: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get client(): string {
    return this._client;
  }

  set client(value: string) {
    this._client = value;
  }

  get department(): string {
    return this._department;
  }

  set department(value: string) {
    this._department = value;
  }s
  get startMonth(): string {
    return this._startMonth;
  }

  set startMonth(value: string) {
    this._startMonth = value;
  }

  get startYear(): string {
    return this._startYear;
  }

  set startYear(value: string) {
    this._startYear = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

}
