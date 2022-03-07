import { Mouse } from "../core/mouse";
import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Con extends MyDisplay {

  private _tg:any

  constructor(opt:any = {}) {
    super(opt)

    this._tg = document.querySelector('.l-sample img')
  }


  // 更新
  _update():void {
    super._update()

    // マウスX -1 ~ 1
    const mouseX = Mouse.instance.easeNormal.x

    // -30degから30degの間行ったり来たり
    const rotY = mouseX * 60

    // rotationZは固定
    const rotZ = 20

    Tween.instance.set(this._tg, {
      rotationY:rotY,
      rotationZ:rotZ
    })
  }
}