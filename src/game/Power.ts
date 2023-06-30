import { power } from "../config/sprite"
import Character from "./Character"
import LevelScene from "./LevelScene"

export default class Power extends Character { 
  
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y)
        scene.add.existing(this)
        this.anims.create({key:'power', frames:power, repeat:-1})
        this.anims.play('power')
    }
    
    public behavior(){
       
    }

}