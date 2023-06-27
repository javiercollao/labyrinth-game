import BootScene from "./BootScene";
import LevelScene from "./LevelScene";
import MenuScene from "./MenuScene";

export default class Game extends Phaser.Game {

    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

    public main() {
        this.scene.add('BootScene', BootScene);

        const initGame = new MenuScene('InitGame','menu-intro');
        const gameOver = new MenuScene('GameOver', 'menu-end'); 

        this.scene.add('InitGame', initGame);
        this.scene.add('GameOver', gameOver);

        const level1 = new LevelScene('Level1');
        const level2 = new LevelScene('Level2');
        const level3 = new LevelScene('Level3');

        this.scene.add('Level1', level1);
        this.scene.add('Level2', level2);
        this.scene.add('Level3', level3);
        
        this.scene.start('BootScene');
 
    }
}