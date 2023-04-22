import IItem from "./interfaces/item.interface";
import ICharacter from "./interfaces/character.interface";
import { power } from "../config/gameOptions";

export default class Power extends Phaser.GameObjects.Sprite implements ICharacter, IItem {
    
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
        this.anims.create({key:'power', frames:power, repeat:-1});
    }

    animation(): void {
        this.play('power');
    }

    remove(): void{
        this.destroy()
    }
}