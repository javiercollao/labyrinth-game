import PlayGame from "~/models/play-game"

export default class Menu extends Phaser.Scene {

    isIntro : Boolean;
    
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
        this.isIntro? this.intro() : this.end()
    }

    public intro() : void{

        this.add.image(0,0, 'menu-intro').setOrigin(0).setDepth(1)
        this.button()
    }

    public end() : void{
        this.add.image(0,0, 'menu-end').setOrigin(0).setDepth(2)
        this.button()
    }

    public button() : void{
        let button = this.createButton()
        button.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //this.isIntro? this.setIsIntro(false): this.setIsIntro(true)
            console.log("hoals")
        })
    }

    public createButton(): Phaser.GameObjects.Image{
        if(this.isIntro){
            let buttonStart = this.add.image(330,289,'btn-menu-intro').setOrigin(0).setDepth(1)
            return buttonStart
        }
        let buttonEnd = this.add.image(20,289,'btn-menu-end').setOrigin(0).setDepth(2)
        return buttonEnd
    }



}