 
import { floppy } from "../config/gameOptions";

export default class Floppy extends Phaser.GameObjects.Sprite{
    
    canMoveRight: boolean;
    canMoveLeft: boolean;
    canMoveUp: boolean;
    canMoveDown: boolean;

    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
        this.canMoveRight = true;
        this.canMoveLeft = true;
        this.canMoveUp = true;
        this.canMoveDown = true; 
        this.anims.create({key:'floppy', frames:floppy, repeat:-1});
    }

    animation(): void {
        this.play('floppy');
    }

    remove(): void{
        this.destroy()
    }
}