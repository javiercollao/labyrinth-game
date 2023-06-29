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
    
    public behavior(){
        const chip = this.scene.data.get('chip')
        const score = this.scene.data.get('score')
        this.scene.data.set('score', score+10)
        this.scene.data.set('chip', chip+1)
    }

}