 
import { door } from "../config/sprite";
import Character from "./Character"; 
import LevelScene from "./LevelScene";

 export default class Door extends Character { 
    constructor(scene: LevelScene, x: number, y: number) {
        super(scene, x, y); 
        this.anims.create({key:'door', frames:door, repeat: -1});
        this.play('door')
    }
}