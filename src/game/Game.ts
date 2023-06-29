import BootScene from "./BootScene";
import LevelScene from "./LevelScene"; 
import MenuScene from "./MenuScene";
import { menuGameInit, menuGameOver } from "../config/menu";
import { level10Config, level1Config, level2Config, level3Config, level4Config, level5Config, level6Config, level7Config, level8Config, level9Config} from "../config/level";

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
        const level2 = new LevelScene(level2Config);
        const level3 = new LevelScene(level3Config);
        const level4 = new LevelScene(level4Config);
        const level5 = new LevelScene(level5Config);
        const level6 = new LevelScene(level6Config);
        const level7 = new LevelScene(level7Config);
        const level8 = new LevelScene(level8Config);
        const level9 = new LevelScene(level9Config);
        const level10 = new LevelScene(level10Config);

 
        this.scene.add('Level1', level1);
        this.scene.add('Level2', level2);
        this.scene.add('Level3', level3);
        this.scene.add('Level4', level4);
        this.scene.add('Level5', level5);
        this.scene.add('Level6', level6);
        this.scene.add('Level7', level7);
        this.scene.add('Level8', level8);
        this.scene.add('Level9', level9);
        this.scene.add('Level10', level10);
        
        this.scene.start('BootScene');
 
    }
}