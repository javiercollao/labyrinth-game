
/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar el portal que se muestra en la escena.
 * 
 * @class Door 
 */

import ISprite from "../interfaces/sprite.interface";
import { door } from "../config/gameOptions";

 export default class Door extends Phaser.GameObjects.Sprite implements ISprite{
      
    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
    }

    movement(): void {
        throw new Error("Method not implemented.");
    }

    animation(): void {
        this.anims.create({key:'door', frames:door, repeat: -1});
        this.play('door')
    }
    
 
 }