import request = require('request-promise-native');

export class Request {
  options: request.Options;
  readonly url: string = '';
  form: object; 
  constructor() {
    this.form = {};
    this.options = {
      uri: this.url,
      form: this.form,
      method: 'POST',
    };
  }

  public execute() {
    request(this.options)
      .then(function (body) {
      })
      .catch(function (error) {
        console.log('error',error);
      });
  }

  set param(form: object) {
    Object.assign(this.options, {form: form});
  }

  get param() :object {
    return this.options;
  }

}