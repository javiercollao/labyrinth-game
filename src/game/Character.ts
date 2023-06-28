import { dexterStand } from './../config/gameOptions';

export default class Character extends Phaser.GameObjects.Sprite {

    private canMoveRight: boolean
    private canMoveLeft : boolean
    private canMoveUp   : boolean
    private canMoveDown : boolean
    
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y, 'sprites')
      
      this.canMoveRight = true
      this.canMoveLeft  = true
      this.canMoveUp    = true
      this.canMoveDown  = true
  
      const SKIN_WIDTH  = 16
      const SKIN_LENGTH = 16
    
      this.setSize(SKIN_WIDTH, SKIN_LENGTH)

      this.setDepth(1)
  
      this.scene.add.existing(this)
      this.anims.create({key:'player', frames:dexterStand, repeat:-1})
      this.anims.play('player')

    }

    // Getter y Setter para moveUp
    get moveUp(): boolean {
        return this.canMoveUp
    }

    set moveUp(newValue: boolean) {
        this.canMoveUp = newValue
    }

    // Getter y Setter para moveDown
    get moveDown(): boolean {
        return this.canMoveDown
    }

    set moveDown(newValue: boolean) {
        this.canMoveDown = newValue
    }

    // Getter y Setter para moveLeft
    get moveLeft(): boolean {
        return this.canMoveLeft
    }

    set moveLeft(newValue: boolean) {
        this.canMoveLeft = newValue
    }

    // Getter y Setter para moveRight
    get moveRight(): boolean {
        return this.canMoveRight
    }

    set moveRight(newValue: boolean) {
        this.canMoveRight = newValue
    }
 
  }