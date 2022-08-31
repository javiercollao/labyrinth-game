
import ICharacter from "../interfaces/character.interface";
import IEnemy from "../interfaces/enemy.interface";
import { meanie } from "../config/gameOptions";

export default class Meanie extends Phaser.GameObjects.Sprite implements ICharacter, IEnemy  {
    
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
        this.anims.create({key:'meanie', frames:meanie, repeat:-1})
    }
    
    movement(): void {
        throw new Error("Method not implemented.");
    }
    
    animation(): void {
        this.play('meanie');
    }

}
