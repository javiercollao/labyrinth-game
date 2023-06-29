import { microchip } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Microchip extends Character { 
  
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y)
        scene.add.existing(this)
        this.anims.create({key:'microchip', frames:microchip, repeat:-1})
        this.anims.play('microchip')
    }
    
    public remove() {
        this.destroy()
    }

}