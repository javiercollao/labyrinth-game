import BootScene from "./BootScene";
import LevelScene from "./LevelScene";
import MenuScene from "./MenuScene";
import { menuGameInit, menuGameOver } from "../config/menu";
import { level1Config } from "../config/level";

export default class Game extends Phaser.Game {

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

    public main() {
        this.scene.add('BootScene', BootScene);

        const initGame = new MenuScene(menuGameInit);
        const gameOver = new MenuScene(menuGameOver); 

        this.scene.add('InitGame', initGame);
        this.scene.add('GameOver', gameOver);

        const level1 = new LevelScene(level1Config);
        // const level2 = new LevelScene('Level2');
        // const level3 = new LevelScene('Level3');

        this.scene.add('Level1', level1);
        // this.scene.add('Level2', level2);
        // this.scene.add('Level3', level3);
        
        this.scene.start('BootScene');
 
    }
}