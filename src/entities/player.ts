import PlayGame from '~/scenes/play-game';
import { dexterStand, dexterWalk } from '../config/gameOptions';
 
import Character from "./character";

export default class Player extends Character {
  public scene!: PlayGame;

  constructor(scene: PlayGame, x: number, y: number) {
    super(scene, x, y); 
    this.animatePlayer()
    this.standAnimation()
  }

  rightMovement(): void {
    this.x += 16;
  }
  leftMovement(): void {
    this.x -= 16;
  }
  upMovement(): void {
    this.y -= 16;
  }
  downMovement(): void {
    this.y += 16;
  }

  standAnimation(): void {
    this.skin.play('stand');
  }
  walkRightAnimation(): void {
    this.skin.play('walk').setFlipX(false);
  }
  walkLeftAnimation(): void {
    this.skin.play('walk').setFlipX(true);
  } 

  animatePlayer() : void {
    this.skin.anims.create({
        key:'stand', 
        frames:dexterStand, 
        repeat:0
    })

    this.skin.anims.create({
        key:'walk', 
        frames:dexterWalk, 
        repeat:0, 
        delay:1
    })
   }

   movement()  : void{
    const { left, right, up, down } = this.scene.inputs;

    if (left) { 
        console.log("IZQUIERDA")
        this.leftMovement()
        this.walkLeftAnimation()
    } else if(right){
        console.log("DERECHA")
        this.rightMovement()
        this.walkRightAnimation()
    } else if (up) {
        console.log("ARRIBA")
        console.log(up)
        this.upMovement()
        this.standAnimation()
    }else if(down){
        console.log("ABAJO")
        this.downMovement()
        this.standAnimation()
    }
   }

}