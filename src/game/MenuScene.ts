import { buttonResetImg } from "../config/sprite"
import { ConfigMenu } from "../config/menu" 

export default class MenuScene extends Phaser.Scene{
    private config: ConfigMenu

    constructor(config: ConfigMenu) {
        super({
          key : config.key
        }) 
        this.config = config
       
    }

    public create () { 
      const img = new Phaser.GameObjects.Image(this, 0, 0, this.config.image)
      img.setOrigin(0)
 
      const button = new Phaser.GameObjects.Image(this, this.config.x, this.config.y, this.config.btn)

      this.add.existing(img)
      this.add.existing(button)

      

      button.setInteractive()
      button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.game.scene.start("Level1")
        this.scene.setVisible(false)
      })
    }
    
}