import { dexterStand, dexterWalk } from '../config/gameOptions';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    canMoveRight: boolean;
    canMoveLeft: boolean;
    canMoveDown: boolean;
    canMoveUp: boolean;
    score: number;
    constructor(scene : Phaser.Scene, posX : number, posY : number) {
        super(scene, posX, posY, 'sprites'); 
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.canMoveRight = true;
        this.canMoveLeft = true;
        this.canMoveUp = true;
        this.canMoveDown = true;
        this.score = 0;
        this.depth = 2;
        this.animatePlayer()
         
    }

    init(){
 
        this
        .setBounce(0.2)
        // .setCollideWorldBounds(true)
        // .setGravityY(300)
        // .setDepth(2)
        // .body.setSize(32,32,64,64); // custom mask => setSize(width, height, XinSprite, YinSprite)
    }

    getCanMoveRight(): boolean {
        return this.canMoveRight;
    }
    getCanMoveLeft(): boolean {
      return this.canMoveLeft;
    }
    getCanMoveUp(): boolean {
      return this.canMoveUp;
    }
    getCanMoveDown(): boolean {
      return this.canMoveDown;
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
    setScore(): void {
      this.score++;
    }

    standAnimation(): void {
        this.play('stand');
    }
    walkRightAnimation(): void {
      this.play('walk').setFlipX(false);
    }
    walkLeftAnimation(): void {
      this.play('walk').setFlipX(true);
    }
    
    animatePlayer() {
        this.anims.create({
            key:'stand', 
            frames:dexterStand, 
            repeat:0
        })

        this.anims.create({
            key:'walk', 
            frames:dexterWalk, 
            repeat:0, 
            delay:1
        })
    }
}