// 画像のimageW, imageHは元画像の値を入力する。
// pxによるサイズ変更ができないため、変更後のサイズを取得するにはそれら元画像のimageW, imageHにそれぞれscaleをかける
export default {
  game: {
    width: 1280,
    height: 720,
    pointerNum: 1
  },
  background: {
    imageKey: 'background',
    scale: 2,
    depth: 0
  },
  body: {
    imageKey: 'body',
    scale: 1.1,
    window: {
      left: 422,
      top: 335,
      centerY: 408
    },
    depth: 30
  },
  reel: {
    num: 3,
    length: 21,
    speed: {
      move: 20,
      slip: 10
    }
  },
  partition: {
    imageKey: 'partition',
    imageW: 20,
    imageH: 128,
    scale: 1.15
  },
  icon: {
    // 下から上へ進むため、reverseすること
    imageKeys: [
      [
        'i_bell',
        'i_seven',
        'i_rhino',
        'i_muscat',
        'i_rhino',
        'i_muscat',
        'i_bar',
        'i_cherry',
        'i_muscat',
        'i_rhino',
        'i_muscat',
        'i_seven',
        'i_pierrot',
        'i_muscat',
        'i_rhino',
        'i_muscat',
        'i_cherry',
        'i_bar',
        'i_muscat',
        'i_rhino',
        'i_muscat'
      ].reverse(),
      [
        'i_rhino',
        'i_seven',
        'i_muscat',
        'i_cherry',
        'i_rhino',
        'i_bell',
        'i_muscat',
        'i_cherry',
        'i_rhino',
        'i_bar',
        'i_muscat',
        'i_cherry',
        'i_rhino',
        'i_bell',
        'i_muscat',
        'i_cherry',
        'i_rhino',
        'i_bar',
        'i_muscat',
        'i_cherry',
        'i_pierrot'
      ].reverse(),
      [
        'i_muscat',
        'i_seven',
        'i_bar',
        'i_bell',
        'i_rhino',
        'i_muscat',
        'i_pierrot',
        'i_bell',
        'i_rhino',
        'i_muscat',
        'i_pierrot',
        'i_bell',
        'i_rhino',
        'i_muscat',
        'i_pierrot',
        'i_bell',
        'i_rhino',
        'i_muscat',
        'i_pierrot',
        'i_bell',
        'i_rhino'
      ].reverse()
    ],
    imageW: 170,
    imageH: 65,
    scale: 0.76,
    depth: 1
  },
  frameButtonStop: {
    imageKey: 'frame_button_stop',
    imageW: 270,
    imageH: 80,
    scaleW: 2.46,
    scaleH: 1.83,
    y: 574,
    depth: 5
  },
  buttonStop: {
    imageKey: 'button_stop',
    imageW: 50,
    imageH: 50,
    scale: 2,
    leftMostX: 478,
    y: 649,
    marginX: 64,
    depth: 6
  },
  buttonStart: {
    imageKey: 'button_start',
    imageW: 100,
    imageH: 100,
    scale: 1.6,
    x: 308,
    y: 720,
    depth: 7
  }
}
