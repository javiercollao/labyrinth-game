import ICharacter from "../interfaces/character.interface";
import IEnemy from "../interfaces/enemy.interface";
import { tileType, virus } from "../../config/gameOptions";

export default class Virus extends Phaser.GameObjects.Sprite implements ICharacter, IEnemy {
    
    canMoveRight: boolean;
    canMoveLeft: boolean;
    canMoveUp: boolean;
    canMoveDown: boolean;
    stillLeft: boolean;
    stillDown: boolean; 

    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites');
        scene.add.existing(this);
        this.canMoveRight = true;
        this.canMoveLeft = true;
        this.canMoveUp = true;
        this.canMoveDown = true;
        this.stillLeft = true;
        this.stillDown = true; 
        this.anims.create({key:'virus', frames:virus, repeat:-1});
    }

    getPositionX(): number {
        return this.x;
    }
    getPositionY(): number {
      return this.y;
    }
    getNextRightPosition(): number {
      return this.x + 16;
    }
    getNextLeftPosition(): number {
      return this.x - 16;
    }
    getNextUpPosition(): number {
      return this.y - 16;
    }
    getNextDownPosition(): number {
      return this.y + 16;
    }
    setCanMoveRight(value: boolean): void {
        this.canMoveRight = value;
    }
    setCanMoveLeft(value: boolean): void {
      this.canMoveLeft = value;
    }
    setCanMoveUp(value: boolean): void {
      this.canMoveUp = value;
    }
    setCanMoveDown(value: boolean): void {
      this.canMoveDown = value;
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
    
    movement(): void { 
        if(this.canMoveUp && this.canMoveLeft){
            // move left
            this.leftMovement()
            
        }else if(this.canMoveUp && this.canMoveRight){
            // move u
            this.upMovement()
        }else if(this.canMoveDown && this.canMoveRight){
            // move r
            this.rightMovement()
        }else if(this.canMoveDown && this.canMoveLeft){
            // move d
            this.downMovement()
        }else if(this.canMoveLeft && this.canMoveLeft){
            this.stillLeft? this.leftMovement() : this.rightMovement()
        }else if(this.canMoveUp && this.canMoveDown){
            this.stillDown? this.downMovement() : this.upMovement()
        }
 
    }
    
    animation(): void {
        this.play('virus');
    }

    remove(): void{
        this.destroy()
    }

     


}
