import { Request } from "../Service/Request";

export class Controller {

  readonly CMD1_VALUE = 'aspMainZone_WebUpdateStatus/';

  protected command0:string;
  protected command1:string;
  private request: Request;

  constructor (){
    this.command0 = '';
    this.command1 = this.CMD1_VALUE;
    this.request = new Request();
  }

  set paramset(command: string) {
    this.command0 = command;
  }

  execute() {
    this.request.param = {cmd0:this.command0, cmd1:this.command1}
    this.request.execute();
  }
}