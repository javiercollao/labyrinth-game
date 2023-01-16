export default class Character extends Phaser.GameObjects.Container {
    public skin: Phaser.GameObjects.Sprite; 
    public sprite: Phaser.Physics.Matter.Sprite;
  
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y);
  
      const SKIN_WIDTH = 16; 
      const SKIN_LENGTH = 16;
  
      this.skin = new Phaser.GameObjects.Sprite(scene, 0, 0, "sprites");
       
      this.add(this.skin);
      this.setSize(SKIN_WIDTH, SKIN_LENGTH);
      this.setDepth(0);
  
      this.scene.add.existing(this); 
      this.sprite = this.scene.matter.add.gameObject(
        this
      ) as Phaser.Physics.Matter.Sprite;
    }
    
    getPositionX(): number {
        return this.x;
    }

    getPositionY(): number {
      return this.y;
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