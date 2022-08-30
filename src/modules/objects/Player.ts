import { dexterStand, dexterWalk } from '../config/gameOptions';
import ICharacter from '../interfaces/character.interface';
import ISprite from '../interfaces/sprite.interface';

/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar el personaje principal en el juego.
 * 
 * @class Player 
 */

export default class Player extends Phaser.GameObjects.Sprite implements ISprite, ICharacter{
 
  canMoveR: boolean;
  canMoveL: boolean;
  canMoveU: boolean;
  canMoveD: boolean;
  score: integer;


  constructor(scene : Phaser.Scene, posX : number, posY : number) {
      super(scene, posX, posY, 'sprites');
      scene.add.existing(this);
      this.canMoveR = true;
      this.canMoveL = true;
      this.canMoveU = true;
      this.canMoveD = true;
      this.score = 0;
  }

  movement(): void {
    throw new Error('Method not implemented.');
  }
    
  /**
   *  @desc Inicializa la animación principal de Dexter
  **/
  animation(name : string) : void {
    this.anims.create({key:'stand', frames:dexterStand, repeat:-1 });
    this.anims.create({key:'walkR', frames:dexterWalk, repeat:0 , delay:1});

    if(name === 'stand'){
      this.play('stand');
    }else if(name === 'walk'){
      this.play('walkR').setFlipX(false);
    }else if(name === 'walkLeft'){
      this.play('walkR').setFlipX(true);
    }
  }
 
}
