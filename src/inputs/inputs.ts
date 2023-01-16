interface Keys {
    up: Phaser.Input.Keyboard.Key;
    down: Phaser.Input.Keyboard.Key;
    left: Phaser.Input.Keyboard.Key;
    right: Phaser.Input.Keyboard.Key;
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
}

export default class Inputs {
    private scene: Phaser.Scene;
    private keys: Keys;
  
    constructor(scene: Phaser.Scene) {
      this.scene = scene;
  
      this.keys = this.scene.input.keyboard.addKeys(
        "W,A,S,D,up,left,down,right"
      ) as Keys;
 
    }
 
    public get up(): boolean {
      return this.keys.up.isDown || this.keys.W.isDown;
    }
  
    public get down(): boolean {
      return this.keys.down.isDown || this.keys.S.isDown;
    }
  
    public get left(): boolean {
      return this.keys.left.isDown || this.keys.A.isDown;
    }
  
    public get right(): boolean {
      return this.keys.right.isDown || this.keys.D.isDown;
    }

}