import C from '../consts'
import Partitions from './partitions'

// refer: https://qiita.com/butchi_y/items/c400a06cbd15f0dad6fa
function posMod(i: number, j: number): number {
  return i % j < 0 ? (i % j) + 0 + (j < 0 ? -j : j) : (i % j) + 0
}

export default class Icon extends Phaser.GameObjects.Image {
  public static width = C.icon.imageW * C.icon.scale
  public static height = C.icon.imageH * C.icon.scale
  public static createPosition = -Math.floor((C.icon.displayNum - 1) / 2)
  public static destroyPosition = Math.floor(C.icon.displayNum / 2)

  constructor(
    scene: Phaser.Scene,
    public reelPosition: number,
    public iconPosition: number, // 0を中心とする
    public imageKeyPosition: number,
    offsetY = 0
  ) {
    super(
      scene,
      C.body.window.left + reelPosition * (Icon.width + Partitions.width),
      C.body.window.centerY + Icon.height * iconPosition + offsetY,
      C.icon.imageKeys[reelPosition][posMod(imageKeyPosition, C.icon.imageKeys[reelPosition].length)]
    )
    this.setOrigin(0, 0.5).setScale(C.icon.scale).setDepth(C.icon.depth)
    scene.add.existing(this)
  }

  public nextImageKeyPosition(): number {
    return posMod(this.imageKeyPosition - C.icon.displayNum, C.icon.imageKeys[this.reelPosition].length)
  }

  public move(speed: number): void {
    this.y += speed
  }
}
