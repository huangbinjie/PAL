import { ActorSystem } from "js-actor"
import { StageSystem } from "./systems/stage/Stage"
import { InputSystem } from "./systems/input/input"
import { ChangeStage } from "@components/Stage/messages/ChangeStage";
import { WelcomeSystem } from "@systems/welcome/Welcome";
import { Welcome } from "@components/Welcome/messages/Welcome";
import { LogSystem } from "@systems/log/log";
import { DialogueSystem } from "@systems/dialogue/Dialogue";

export class Game {
  public entities = new Map()
  private system = new ActorSystem("game")

  public start() {

    this.system.actorOf(new StageSystem, "StageSystem")
    this.system.actorOf(new DialogueSystem, "DialogueSystem")
    this.system.actorOf(new InputSystem, "InputSystem")
    this.system.actorOf(new WelcomeSystem, "WelcomeSystem")
    this.system.actorOf(new LogSystem, "LogSystem")

    this.system.tell("WelcomeSystem", new Welcome())
  }
}

new Game().start()