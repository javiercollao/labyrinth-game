import { LevelConfig, tiles } from "../config/level";
import Inputs from "./Inputs";

 
export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs;
    private config: LevelConfig;

    constructor(config : LevelConfig) {
        super({
          key : config.key
        })
        this.config = config
    }

    public init() {
      this.inputs = new Inputs(this);
    }
    
    public create () {  
      
      const map = this.make.tilemap(tiles);

      const laberynth = map.addTilesetImage('sprites2', 'levelTiles');
      const layer = map.createLayer(this.config.levelNumber, laberynth, 0, 0);
      layer.setDepth(1)

      const container = map.addTilesetImage('principal','mainGame')
      const gameContainer = map.createLayer('static', container, 0, 0);
      gameContainer.setDepth(2)


       

    }
    
}