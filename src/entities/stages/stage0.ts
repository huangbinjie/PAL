import { WoodenChestEntity } from "../chests/WoodenChest"
import { ICharacterEntity } from "../characters/ICharacter"
import { Stage2Entity } from "./stage2"
import { StageComponent } from "@components/Stage/Stage";
import { TravelerSwordEntity } from "../weapons/sword/TravelerSword/TravelerSword";
import { BonusComponent } from "@components/Bonus/Bonus";
import { NameComponent } from "@components/name/Name";
import { DescComponent } from "@components/desc/Desc";
import { LuoChaGuiPo } from "@entities/characters/LuoChaGuiPo";
import { IStageEntity } from "@entities/stages/IStage";

/**
 * [罗刹洞（梦中）]
　　跟踪着几个小鬼，李逍遥乘着飞剑来到罗刹洞。在洞的深处，遇见罗刹鬼婆，并于之决一死战。由于罗刹鬼婆实在难以对付，李逍遥最终告败。
 */
export class Stage0Entity implements IStageEntity {
  public nameComponent = new NameComponent("罗刹洞")
  public descComponent = new DescComponent("梦中")
  public stageComponent: StageComponent

  constructor() {
    const luochaguipo = new LuoChaGuiPo()
    this.stageComponent = new StageComponent([luochaguipo])
  }
}