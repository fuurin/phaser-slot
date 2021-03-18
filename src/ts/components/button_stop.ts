import C from '../consts'
import Reel from './reel'
import ReelState from '../enums/reel_state'

export default class ButtonStop extends Phaser.GameObjects.Image {
  public static width = C.buttonStop.imageW * C.buttonStop.scale
  public static height = C.buttonStop.imageH * C.buttonStop.scale

  constructor(scene: Phaser.Scene, private reel: Reel) {
    super(
      scene,
      C.buttonStop.leftMostX + (ButtonStop.width + C.buttonStop.marginX) * reel.reelPosition,
      C.buttonStop.y,
      C.buttonStop.imageKey
    )
    this.setScale(C.buttonStop.scale).setDepth(C.buttonStop.depth)
    this.setInteractive().on('pointerdown', this.changeReelState)
    scene.add.existing(this)
  }

  private changeReelState() {
    if (this.reel.state !== ReelState.moving) return
    this.reel.state = ReelState.slipping
  }
}
