/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar el portal que se muestra en la escena.
 * 
 * @class Door 
*/ 

import { door } from "../config/gameOptions";
import IDoor from "../interfaces/door.interface";

 export default class Door extends Phaser.GameObjects.Sprite implements IDoor{
      
    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
        this.anims.create({key:'door', frames:door, repeat: -1});
    }
 
    animation(): void {
        this.play('door');
    }
 
}