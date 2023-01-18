import PlayGame from "~/scenes/play-game";
import Character from "./character";
import { virus } from './../config/gameOptions';


export default class Virus extends Character {
    public scene!: PlayGame;

    constructor(scene: PlayGame, x: number, y: number) {
        super(scene, x, y, 'enemy', 0);
        this.skin.anims.create({
            key: 'virus', 
            frames: virus,
            repeat: -1 });
        this.startAnimation()
        this.sprite.setIgnoreGravity(true)
    }

    startAnimation() : void{ 
        this.skin.play('virus', true)
    }

    movement(): void { 
        let tile = this.scene.map.getTileAtWorldXY(this.positionX, this.positionY, true)
        if(tile.index === 1){ 
            this.upMovement() 
        }else if(tile.index === 2){ 
            this.rightMovement() 
        }else if(tile.index === 3){ 
            this.downMovement() 
        }else if(tile.index === 4){ 
            this.leftMovement()
        }
    }

}