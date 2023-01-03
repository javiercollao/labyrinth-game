import PlayGame from "~/models/play-game"

export default class Menu extends Phaser.Scene {

    isIntro : Boolean;
    img!: Phaser.GameObjects.Image;
    button!: Phaser.GameObjects.Image;

    constructor() {
        super({
          key :'Menu'
        })
        this.isIntro = true  
    }
    
    public setIsIntro (v : Boolean) {
        this.isIntro = v;
    }

    public create() : void {
        this.img = new Phaser.GameObjects.Image(this,0,0,'menu-intro')
        this.button = new Phaser.GameObjects.Image(this,330,289,'btn-menu-intro')

        this.img.setOrigin(0)
        this.add.existing(this.img) 

        this.button.setOrigin(0)
        this.add.existing(this.button)

        this.button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            if(this.isIntro){
                this.setIsIntro(false)
                this.playMenu()
            }else{
                this.setIsIntro(true)
                this.playAgainMenu()
            }
        })
    }
    
    public playMenu() : void{ 
        this.img.setTexture('menu-intro')
        this.button.setTexture('btn-menu-intro')
        this.button.setX(330)
        this.button.setY(289)
    }

    public playAgainMenu() : void{
        this.img.setTexture('menu-end')
        this.button.setTexture('btn-menu-end')
        this.button.setX(20)
        this.button.setY(289)
    }

}