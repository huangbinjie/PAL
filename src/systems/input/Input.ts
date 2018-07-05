import { AbstractActor } from "js-actor"
import * as process from 'process'
import * as readline from "readline"
import { WaitingSelectStageItem } from "@components/input/messages/WaitingSelectStageItem";
import { SelectStageItemComplete } from "@components/input/messages/SelectStageItemComplete";
import { WaitingInteractWithStage } from "@components/input/messages/WaitingInteractWithStage";
import { InteractWithStageComplete } from "@components/input/messages/InteractWithStageComplete";
import { WaitingInput } from "@components/input/messages/WaitingInput";
import { InputComplete } from "@components/input/messages/InputComplete";
import { WaitingConfirmNextDialogue } from "@components/dialogue/messages/WaitingConfirmNextDialogue";
import { NextDialogue } from "@components/dialogue/messages/NextDialogue";

export class InputSystem extends AbstractActor {
  public createReceive() {
    return this.receiveBuilder()
      .match(WaitingInput, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？\n", answer => {
          rl.close()
          this.context.system.tell("WelcomeSystem", new InputComplete(waitingInput.items[+answer - 1]))
        })
      })
      .match(WaitingSelectStageItem, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？\n", answer => {
          rl.close()
          this.context.system.tell("StageSystem", new SelectStageItemComplete(waitingInput.stage, +answer - 1))
        })
      })
      .match(WaitingInteractWithStage, waitingInput => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("我该怎么做？\n", answer => {
          rl.close()
          this.context.system.tell("StageSystem", new InteractWithStageComplete(waitingInput.stage, waitingInput.item, waitingInput.value[+answer - 1]))
        })
      })
      // 确认对话
      .match(WaitingConfirmNextDialogue, waiting => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        rl.question("\n输入回车下一句\n", () => {
          rl.close()
          this.context.system.tell("DialogueSystem", new NextDialogue(waiting.dialogues, ++waiting.currentIndex))
        })
      })
      .build()
  }
}