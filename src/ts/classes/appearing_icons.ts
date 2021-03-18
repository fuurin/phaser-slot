import C from '../consts'
import Icon from '../components/icon'

export default class AppearingIcons {
  constructor(private above: Icon, private center: Icon, private below: Icon) {}

  public getAboveImageKey(): string {
    return C.icon.imageKeys[this.above.reelPosition][this.above.imageKeyPosition]
  }

  public getCenterImageKey(): string {
    return C.icon.imageKeys[this.center.reelPosition][this.center.imageKeyPosition]
  }

  public getBelowImageKey(): string {
    return C.icon.imageKeys[this.below.reelPosition][this.below.imageKeyPosition]
  }

  public getImageKeys(): string[] {
    return [this.getAboveImageKey(), this.getCenterImageKey(), this.getBelowImageKey()]
  }
}
