import { bolt } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Bolt extends Character {
     
    public canMoveLeftAndDown: boolean;
    public canMoveRightAndDown: boolean;

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y);
        scene.add.existing(this);
        this.canMoveLeftAndDown = false
        this.canMoveRightAndDown = false
        this.anims.create({key:'bolt',frames: bolt, repeat:-1});
        this.play('bolt')
    }

}