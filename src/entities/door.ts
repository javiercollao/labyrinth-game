
import PlayGame from "~/scenes/play-game";
import { door, tilesObject } from "../config/gameOptions";
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
            this.scene.level == 7? console.log("fgh") : this.levelManager()
        }
    }

    levelManager(): void{
        
        this.scene.layer.novisible()
        this.scene.upgradeLevel()
        this.scene.microshipsPoints = 0; 
        this.scene.createGameLaberynth() 
        
        this.scene.player.setPosition(this.scene.positionHorizontal(tilesObject[this.scene.level].player.x), this.scene.positionVertical(tilesObject[this.scene.level].player.y))
        this.setPosition(this.scene.positionHorizontal(tilesObject[this.scene.level].door.x), this.scene.positionVertical(tilesObject[this.scene.level].door.y))
        
        this.scene.player.canMove()
    }
    
    
    
}