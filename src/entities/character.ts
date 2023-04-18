import { tileType } from './../config/gameOptions';
import PlayGame from "~/scenes/play-game";

export default class Character extends Phaser.GameObjects.Sprite {
    public scene!: PlayGame;
    public canMoveRight: boolean;
    public canMoveLeft: boolean;
    public canMoveUp: boolean;
    public canMoveDown: boolean;
    
    constructor(scene: Phaser.Scene, x: number, y: number, label: string) {
      super(scene, x, y, 'sprites');
      
      this.canMoveRight = true;
      this.canMoveLeft = true;
      this.canMoveUp = true;
      this.canMoveDown = true;
  
      const SKIN_WIDTH = 16; 
      const SKIN_LENGTH = 16;
    
      this.setSize(SKIN_WIDTH, SKIN_LENGTH);
      this.setDepth(0);
  
      this.scene.add.existing(this); 
      
    }
 

    get positionX(): number {
        return this.x;
    }

    get positionY(): number {
        return this.y;
    }

    get nextRightPosition(): number {
        return this.x + 16;
    }

    get nextLeftPosition(): number {
        return this.x - 16;
    }

    get nextUpPosition(): number {
        return this.y - 16;
    }

    get nextDownPosition(): number {
        return this.y + 16;
    }

    canMove(){
        this.checkingTileToRightFromPosition()
        this.checkingTileToLeftFromPosition()
        this.checkingTileToDownFromPosition()
        this.checkingTileToUpFromPosition()
    }

    checkingTileToRightFromPosition() {
      ;
    }
    checkingTileToLeftFromPosition() {
      ;
    }
    checkingTileToDownFromPosition() {
      ;
    }
    checkingTileToUpFromPosition() {
      ;
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
  }