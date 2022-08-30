/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar los puntos que se muestran en la escena.
 * 
 * @class Door 
 */

import ICharacter from "../interfaces/character.interface";
import ISprite from "../interfaces/sprite.interface";
import { point1, point2, point3, point4, floppyDisk, ship } from "../config/gameOptions";

export default class Point extends Phaser.GameObjects.Sprite implements ISprite, ICharacter{
    
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

    animation(name:string): void {
        if(name === 'ship'){
            this.anims.create({key:'ship', frames:ship, repeat: -1});
            this.play('ship')
        }else if(name === 'floppy'){
            this.anims.create({key:'floppy', frames:floppyDisk, repeat: -1});
            this.play('floppy')
        }else if(name === 'point1'){
            this.anims.create({key:'point1', frames:point1, repeat: -1});
            this.play('point1')
        }else if(name === 'point2'){
            this.anims.create({key:'point2', frames:point2, repeat: -1});
            this.play('point2')
        }else if(name === 'point3'){
            this.anims.create({key:'point3', frames:point3, repeat: -1});
            this.play('point3')
        }else if(name === 'point4'){
            this.anims.create({key:'point4', frames:point4, repeat: -1});
            this.play('point4')
        } 
    }

}