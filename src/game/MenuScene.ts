import { Coordenadas } from "../config/buttons"

export default class MenuScene extends Phaser.Scene{
  background: string
  btnImage: string
  btnConfig: Coordenadas

    constructor(key : string, image: string, btn: string, config: Coordenadas) {
        super({
          key : key
        })
        this.background = image
        this.btnImage = btn
        this.btnConfig = config
    }

    public create () { 
      const img = new Phaser.GameObjects.Image(this, 0, 0, this.background)
      img.setOrigin(0)

      const button = new Phaser.GameObjects.Image(this, this.btnConfig.x, this.btnConfig.y, this.btnImage)

      this.add.existing(img)
      this.add.existing(button)

      button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => this.game.scene.start('Level1'))
    }
    
}