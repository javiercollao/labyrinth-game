export default class Character extends Phaser.GameObjects.Container {
    public skin: Phaser.GameObjects.Sprite; 
    public sprite: Phaser.Physics.Matter.Sprite;
    public canMoveRight: boolean;
    public canMoveLeft: boolean;
    public canMoveUp: boolean;
    public canMoveDown: boolean;
  
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y);

      this.canMoveRight = true;
      this.canMoveLeft = true;
      this.canMoveUp = false;
      this.canMoveDown = false;
  
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