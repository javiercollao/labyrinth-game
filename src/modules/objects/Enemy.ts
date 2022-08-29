import 'phaser';

class Enemy extends Phaser.GameObjects.Sprite {

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
    
}

export default Enemy;