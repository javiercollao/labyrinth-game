import { tileType } from './../config/gameOptions';
import PlayGame from "~/scenes/play-game";

export default class Character extends Phaser.GameObjects.Container {
    public skin: Phaser.GameObjects.Sprite; 
    public sprite: Phaser.Physics.Matter.Sprite;
    public canMoveRight: boolean;
    public canMoveLeft: boolean;
    public canMoveUp: boolean;
    public canMoveDown: boolean;
    public scene!: PlayGame;
    
    constructor(scene: Phaser.Scene, x: number, y: number, label: string, friction : number) {
      super(scene, x, y);
      
      this.canMoveRight = true;
      this.canMoveLeft = true;
      this.canMoveUp = true;
      this.canMoveDown = true;
  
      const SKIN_WIDTH = 16; 
      const SKIN_LENGTH = 16;
  
      this.skin = new Phaser.GameObjects.Sprite(scene, 0, 0, "sprites");
       
      this.add(this.skin);
      this.setSize(SKIN_WIDTH, SKIN_LENGTH);
      this.setDepth(0);
  
      this.scene.add.existing(this); 
      this.sprite = this.scene.matter.add.gameObject(
        this, 
        {
            friction: friction,
            sleepThreshold:0,
            label: label,
            slop: 0
        }
      ) as Phaser.Physics.Matter.Sprite;
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
        this.nextTileRightIndex()
        this.nextTileLeftIndex()
        this.nextTileDownIndex()
        this.nextTileUpIndex()
    }

    nextTileRightIndex() {
        throw new Error('Method not implemented.');
    }
    nextTileLeftIndex() {
        throw new Error('Method not implemented.');
    }
    nextTileDownIndex() {
        throw new Error('Method not implemented.');
    }
    nextTileUpIndex() {
        throw new Error('Method not implemented.');
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