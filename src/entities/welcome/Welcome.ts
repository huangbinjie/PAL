import { IEntity } from "@entities/IEntity"
import { WelcomeComponent } from "@components/welcome/Welcome";
import { NameComponent } from "@components/name/Name";
import { GameStartMenuEntity } from "@entities/menus/GameStart";

export class WelcomeEntity implements IEntity {
  public nameComponent = new NameComponent("欢迎页")
  public welcomponent: WelcomeComponent

  constructor() {
    const startGame = new GameStartMenuEntity()
    this.welcomponent = new WelcomeComponent([startGame])
  }
}