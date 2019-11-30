import { Controller } from './Controller';

export class Volum extends Controller {

  readonly UP_PARAM = 'PutMasterVolumeBtn/>';
  readonly DOWN_PARAM = 'PutMasterVolumeBtn/<';
  readonly MUTE_PARAM = 'PutVolumeMute/TOGGLE';

  constructor() {
    super();
  }

  public up() : void 
  {
    this.paramset = this.UP_PARAM;
    return this.execute();
  }

  public down() : void
  {
    this.paramset = this.DOWN_PARAM;
    return this.execute();
  }

  public mute() : void 
  {
    this.paramset = this.MUTE_PARAM;
    return this.execute();
  }
}