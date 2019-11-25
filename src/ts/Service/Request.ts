import request = require('request-promise-native');

export class Request {
  readonly url: string = '';
  form: object; 
  method: string;
  options: object;
  constructor() {
    this.form = {};
    this.method = 'POST';
    this.options = {
      uri: this.url,
      method: this.method,
      form: this.form,
    };
  }

  public execute() {
    let options: request.Options = {
      uri: this.url,
      method: this.method,
      form: this.form
    };
    request(options)
      .then(function (body) {
        if(body) {
        }
      })
      .catch(function (error) {
        console.log('error',error);
      });
  }

  public param(form: object) {
    this.form = form;
  }

}