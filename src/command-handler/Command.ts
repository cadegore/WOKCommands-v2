import WOKCommands from "../../";
import { CommandObject } from "../../typings";

class Command {
  private _instance: WOKCommands;
  private _commandName: string;
  private _commandObject: CommandObject;

  constructor(
    instance: WOKCommands,
    commandName: string,
    commandObject: CommandObject
  ) {
    this._instance = instance;
    this._commandName = commandName.toLowerCase();
    this._commandObject = commandObject;
  }

  public get instance() {
    return this._instance;
  }

  public get commandName() {
    return this._commandName;
  }

  public get commandObject() {
    return this._commandObject;
  }
}

export default Command;
