export class Email {

  private _name: string;
  private _company: string;
  private _subject: string;
  private _body: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  toJSON() {
    return {
      'name': this._name,
      'company': this._company,
      'subject': this._subject,
      'body': this._body,
    };
  }

}
