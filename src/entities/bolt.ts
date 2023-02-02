import PlayGame from "~/scenes/play-game";
import { bolt } from "../config/gameOptions";
import Character from "./character";

export default class Bolt extends Character {
    
    public scene!: PlayGame;

    constructor(scene : Phaser.Scene, x : number, y : number) {
        super(scene, x, y, 'bolt', 0);
        scene.add.existing(this);
        this.startAnimation()
        this.sprite.setIgnoreGravity(true)
        this.canMove() 
    }

    startAnimation() : void{ 
        this.skin.anims.create({
            key:'bolt', 
            frames: bolt, 
            repeat:-1
        });
        this.skin.play('bolt', true)
    }
 
}
