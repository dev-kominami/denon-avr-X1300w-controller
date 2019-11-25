import { Request } from "./Service/Request";

export class Volum {

  request: Request;
  form: any;
  readonly CMD1_VALUE = 'aspMainZone_WebUpdateStatus/';
  readonly UP_PARAM = 'PutMasterVolumeBtn/>';
  readonly DOWN_PARAM = 'PutMasterVolumeBtn/<';
  readonly MUTE_PARAM = 'PutVolumeMute/TOGGLE';

  constructor() {
    this.request = new Request();
    this.form = {
      cmd0: '',
      cmd1: this.CMD1_VALUE
    };
  }

  public up() {
    this.form.cmd0 = this.UP_PARAM;
    this.request.param(this.form);
    this.request.execute();
  }

  public down() {
    this.form.cmd0 = this.DOWN_PARAM;
    this.request.param(this.form);
    this.request.execute();
  }

  public mute() {
    this.form.cmd0 = this.MUTE_PARAM;
    this.request.param(this.form);
    this.request.execute();
  }
}