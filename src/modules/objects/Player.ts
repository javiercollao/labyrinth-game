import 'phaser'  

/**
 * @author     Javier Collao
 * @classdesc
 * Esta clase se encarga de gestionar el personaje principal en el juego.
 * 
 * @class Player 
 */

export default class Player extends Phaser.GameObjects.Sprite {
 
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

  /**
   *  @desc Inicializa la animación principal de Dexter
  **/
  stand(): void {
    this.anims.create({key:'stand', frames:[{ key: 'sprites', frame: 'p_tile000.png'}],repeat: -1 })
    this.play('stand')
  }

  /**
   *  @desc Inicializa la animación caminar de Dexter
  **/
  walk(direction): void {
    this.anims.create({key:'walkR', frames:[{ key: 'sprites', frame: 'p_tile002.png'},{ key: 'sprites', frame: 'p_tile003.png'},{ key: 'sprites', frame: 'p_tile004.png'}], repeat:0 , delay:1})
    if(direction === "LEFT"){
      this.play('walkR').setFlipX(true)
    }else{
      this.play('walkR').setFlipX(false)
    }
  }
  
}
