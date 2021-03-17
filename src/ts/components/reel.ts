import C from '../consts'
import Icon from './icon'

export const ReelState = {
  moving: 'moving',
  slipping: 'slipping',
  stop: 'stop'
} as const
type ReelState = typeof ReelState[keyof typeof ReelState]

export class Reel extends Phaser.GameObjects.Group {
  public state: ReelState = ReelState.stop
  private offsetY = 0

  constructor(scene: Phaser.Scene, public reelPosition: number) {
    super(scene)

    const firstImageKeyPosition = Math.floor(Math.random() * C.icon.imageKeys[reelPosition].length)
    for (let i = Icon.destroyPosition; i >= Icon.createPosition; i--) {
      this.add(new Icon(scene, reelPosition, i, firstImageKeyPosition + i))
    }
  }

  public update(): void {
    switch (this.state) {
      case ReelState.moving:
        this.move()
        break
      case ReelState.slipping:
        this.slip()
        break
      default:
        return
    }
    this.turnover()
  }

  private move() {
    this.children.iterate((icon: Icon) => icon.move(C.reel.speed.move))
    this.offsetY += C.reel.speed.move
  }

  private slip() {
    this.children.iterate((icon: Icon) => icon.move(C.reel.speed.slip))
    this.offsetY += C.reel.speed.slip
    if (this.offsetY >= Icon.height) this.state = ReelState.stop
  }

  private turnover() {
    if (this.offsetY < Icon.height) return
    this.offsetY -= Icon.height
    const oldestIcon = this.getChildren()[0] as Icon
    this.add(new Icon(this.scene, this.reelPosition, Icon.createPosition, oldestIcon.nextImageKeyPosition(), this.offsetY))
    oldestIcon.destroy()
  }
}
