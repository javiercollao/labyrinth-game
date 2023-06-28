import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Player extends Character {
    public scene!: LevelScene;

    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y);
      }

    public behavior(): void {
     const { left, right, up, down } = this.scene.inputs;
    
     if (left && this.moveLeft) {
         this.setX(this.x-16)
     } else if(right && this.moveRight){  
         this.setX(this.x+16)
     } else if (up && this.moveUp) { 
         this.setY(this.y-16)
     }else if(down && this.moveDown){ 
        this.setY(this.y+16)
     }else{
         //this.standAnimation()
         console.log("prueba")
     }
    }
     
}