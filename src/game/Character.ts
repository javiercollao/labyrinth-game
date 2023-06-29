import LevelScene from './LevelScene';

export default class Character extends Phaser.GameObjects.Sprite {
    public scene!: LevelScene;
    private canMoveRight: boolean
    private canMoveLeft : boolean
    private canMoveUp   : boolean
    private canMoveDown : boolean
    
    constructor(scene: LevelScene, x: number, y: number) {
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
    }

    // Getter y Setter para moveUp
    public getMoveUp(): boolean {
        return this.canMoveUp
    }

    public setMoveUp(newValue: boolean) {
        this.canMoveUp = newValue
    }

    // Getter y Setter para moveDown
    public getMoveDown(): boolean {
        return this.canMoveDown
    }

    public setMoveDown(newValue: boolean) {
        this.canMoveDown = newValue
    }

    // Getter y Setter para moveLeft
    public getMoveLeft(): boolean {
        return this.canMoveLeft
    }

    public setMoveLeft(newValue: boolean) {
        this.canMoveLeft = newValue
    }

    // Getter y Setter para moveRight
    public getMoveRight(): boolean {
        return this.canMoveRight
    }

    public setMoveRight(newValue: boolean) {
        this.canMoveRight = newValue
    }

    // Sensor

    public checkTileCollision(direction: string, offsetX: number = 0, offsetY: number = 0, invalidTileIndicesIndex: number[]): void {
        const positionX = this.x + offsetX;
        const positionY = this.y + offsetY;
      
        const tile = this.scene.map.getTileAtWorldXY(positionX, positionY, true);
      
        const invalidTileIndices = new Set(invalidTileIndicesIndex);
      
        let canMove = true;
      
        if (invalidTileIndices.has(tile.index)) {
          canMove = false;
        }
      
        switch (direction) {
          case 'right':
            this.setMoveRight(canMove);
            break;
          case 'left':
            this.setMoveLeft(canMove);
            break;
          case 'up':
            this.setMoveUp(canMove);
            break;
          case 'down':
            this.setMoveDown(canMove);
            break;
          default:
            break;
        }
      }
      
    public checkingTileToRightFromPosition(invalidTileIndicesIndex: number[]): void {
      this.checkTileCollision('right', 16, 0, invalidTileIndicesIndex);
    }
    
    public checkingTileToLeftFromPosition(invalidTileIndicesIndex: number[]): void {
      this.checkTileCollision('left', -16, 0, invalidTileIndicesIndex);
    }
    
    public checkingTileToUpFromPosition(invalidTileIndicesIndex: number[]): void {
      this.checkTileCollision('up', 0, -16, invalidTileIndicesIndex);
    }
    
    public checkingTileToDownFromPosition(invalidTileIndicesIndex: number[]): void {
      this.checkTileCollision('down', 0, 16, invalidTileIndicesIndex);
    }
      

 
  }