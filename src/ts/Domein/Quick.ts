import { Controller } from './Controller';

export class Quick extends Controller {
  readonly BASE_PARM = 'PutUserMode/'
  readonly Q1 = 'Quick1';
  readonly Q2 = 'Quick2';
  readonly Q3 = 'Quick3';
  readonly Q4 = 'Quick4';
  private param: { [n: number]: string} = {
    1 : 'Quick1',
    2 : 'Quick2',
    3 : 'Quick3',
    4 : 'Quick4'
  };

  constructor() {
    super();
  }

  select(num: number) {
    this.paramset = this.BASE_PARM + this.param[num];
    return this.execute();
  }
}