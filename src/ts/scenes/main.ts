import C from '../consts'
import loadAssets from '../assets/loadAssets'
import Background from '../components/background'
import FrameButtonStop from '../components/frame_button_stop'
import Body from '../components/body'
import { Reel } from '../components/reel'
import Partitions from '../components/partitions'
import ButtonStop from '../components/button_stop'
import ButtonStart from '../components/button_start'

export default class Main extends Phaser.Scene {
  private reels: Reel[] = []
  private buttonStops: ButtonStop[] = []

  constructor() {
    super({ key: 'Main' })
  }

  preload(): void {
    loadAssets(this)
  }

  create(): void {
    this.input.addPointer(C.game.pointerNum)
    new Background(this)
    new FrameButtonStop(this)
    for (let r = 0; r < C.reel.num; r++) {
      const reel = new Reel(this, r)
      this.reels.push(reel)
      this.buttonStops.push(new ButtonStop(this, reel))
    }
    new ButtonStart(this, this.reels)
    new Partitions(this)
    new Body(this)
  }

  update(): void {
    this.reels.forEach((reel) => reel.update())
  }
}
