import C from '../consts'
import Reel from './reel'
import ReelState from '../enums/reel_state'

export default class ButtonStart extends Phaser.GameObjects.Image {
  public static width = C.buttonStart.imageW * C.buttonStart.scale
  public static height = C.buttonStart.imageH * C.buttonStart.scale

  constructor(scene: Phaser.Scene, private reels: Reel[]) {
    super(scene, C.buttonStart.x, C.buttonStart.y, C.buttonStart.imageKey)
    this.setOrigin(1.0, 1.0).setScale(C.buttonStart.scale).setDepth(C.buttonStart.depth)
    this.setInteractive().on('pointerdown', this.startReels)
    scene.add.existing(this)
  }

  private startReels() {
    for (let r = 0; r < this.reels.length; r++) {
      if (this.reels[r].state !== ReelState.stop) return
    }
    this.reels.forEach((reel: Reel) => {
      reel.state = ReelState.moving
    })
  }
}
