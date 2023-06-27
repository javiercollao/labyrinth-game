
import PlayGame from "~/scenes/play-game";
import { door } from "../config/gameOptions";
import Character from "./character"; 

 export default class Door extends Character {
    public scene!: PlayGame;
    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        this.scene.add.existing(this);
        this.anims.create({key:'door', frames:door, repeat: -1});
    }
 
    animation(): void {
        this.play('door');
    }

    checkingCollitionWithPlayer(): void{
        if (this.positionY === this.scene.player.positionY && this.scene.player.positionX  === this.positionX ) {
            this.scene.level == 7? this.scene.scene.start('Menu', {intro: false}) : this.scene.layer.levelManager()
        }
    }

}