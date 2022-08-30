 
import ISprite from "../interfaces/sprite.interface";
import { bee, ball, screw, monkey, robot } from "../config/gameOptions";

/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar al enemigo que se muestra en la escena.
 * 
 * @class Enemy 
 */

 export default class Enemy extends Phaser.GameObjects.Sprite implements ISprite {
 
    canMoveR: boolean;
    canMoveL: boolean;
    canMoveU: boolean;
    canMoveD: boolean;

    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
        this.canMoveR = true;
        this.canMoveL = true;
        this.canMoveU = true;
        this.canMoveD = true; 
    }
    
    movement(): void {
        throw new Error("Method not implemented.");
    }

    animation(name: string): void {
    
        if(name === 'bee'){
            this.anims.create({key:'bee', frames:bee, repeat: -1})
            this.play('bee')
        }else if(name === 'monkey'){
            this.anims.create({key:'monkey', frames:monkey, repeat: -1})
            this.play('monkey')
        }else if(name === 'robot'){
            this.anims.create({key:'robot', frames:robot, repeat: -1})
            this.play('robot')
        }else if(name === 'ball'){
            this.anims.create({key:'ball', frames:ball, repeat: -1})
            this.play('ball')
        }else if(name === 'screw'){
            this.anims.create({key:'screw', frames: screw, repeat: 0})
            this.play('screw')
        }
    }



}