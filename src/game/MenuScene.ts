 
export default class MenuScene extends Phaser.Scene{
    background: string

    constructor(key : string, image: string) {
        super({
          key : key
        })
        this.background = image
    }

    create () { 
      const img = new Phaser.GameObjects.Image(this,0,0,this.background)
      img.setOrigin(0)
      this.add.existing(img) 
    }
    
}