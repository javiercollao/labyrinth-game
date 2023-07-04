 
import { tiles, levelTesting} from "../config/level"; 
import Bolt from "./Bolt";
import Byte from "./Byte";
import Character from "./Character";
import Door from "./Door";
import Floppy from "./Floppy";
import Inputs from "./Inputs";
import Meanie from "./Meanie";
import Microchip from "./Microchip";
import PathFinding from "./PathFinding";
import Player from "./Player";
import Power from "./Power";
import Virus from "./Virus";

export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs
    public player!: Player
    public map!: Phaser.Tilemaps.Tilemap
    public config: any
    public door!: Door
    public bolt!: Bolt[]
    public microchip!: Microchip[]
    public byte!: Byte[]
    public floppy!: Floppy[]
    public virus!: Virus[]
    public meanie!: Meanie[]
    public score!: Phaser.GameObjects.Text;
    public power!: Power[];

    constructor(config : any) {
        super({
          key : config.key
        })
        this.config = config 
    }

    public init() {
      this.inputs = new Inputs(this)
      this.data = new Phaser.Data.DataManager(this)
      this.data.set('score', 0)
      this.data.set('chip', 0)
      this.data.set('bit', 0)
    }
    
    public create (): void {  
      
      this.map = this.make.tilemap(tiles)
      
      const container = this.map.addTilesetImage('principal','mainGame')
      const gameContainer = this.map.createLayer('static', container, 0, 0)
      gameContainer.setDepth(2)

      const laberynth = this.map.addTilesetImage('sprites2', 'levelTiles')
      const layer = this.map.createLayer(this.config.levelNumber, laberynth, 0, 0)
      layer.setDepth(1)
      
      // Info
      this.data.set('level', this.config.levelNumber+1);
      
      const score = this.data.get('score')
      const chip = this.data.get('chip')
      const bit = this.data.get('bit')
      const level = this.data.get('level')
      console.log(score, chip, bit, level) 
      this.score = this.add.text(111, 316,  score, { fontFamily: 'CustomFont', fontSize: '9px' })
      this.score.setAlign('right')
      this.score.setDepth(2)

      // Player
      this.player = new Player(this, this.positionHorizontal(this.config.player.x),this.positionVertical(this.config.player.y))
      
      // Door
      this.door = new Door(this,this.positionHorizontal(this.config.door.x),this.positionVertical(this.config.door.y))
       
      // Bolt
      const bolts = this.config.items.bolt
      this.bolt = bolts.map((bolt) => new Bolt(this, this.positionHorizontal(bolt.x), this.positionVertical(bolt.y)))

      // Items
      const microchips = this.config.items.microchip
      this.microchip = microchips.map((microchip) => new Microchip(this, this.positionHorizontal(microchip.x), this.positionVertical(microchip.y)))
      
      const bytes = this.config.items.byte
      this.byte = bytes.map((byte) =>  new Byte(this, this.positionHorizontal(byte.x), this.positionVertical(byte.y)))

      const floppys = this.config.items.floppy
      this.floppy = floppys.map((floppy) =>  new Floppy(this, this.positionHorizontal(floppy.x), this.positionVertical(floppy.y)))

      const powers = this.config.items.power
      this.power = powers.map((power) =>  new Power(this, this.positionHorizontal(power.x), this.positionVertical(power.y)))

      // Enemies
      const virus = this.config.enemies.virus
      this.virus = virus.map((virus) => new Virus(this, this.positionHorizontal(virus.x), this.positionVertical(virus.y)))
      
      const meanies = this.config.enemies.meanie
      this.meanie = meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y)))
       
      // Matrix

      let path = new PathFinding(20, 13)
      let meanie1 = meanies[0] 
      path.crearInicio(meanie1.x, meanie1.y) 
      path.crearTarget(this.config.player.x, this.config.player.y)
      console.log("inicio",path.inicio)
      console.log("objetivo",path.target)
      path.crearVecinos()
      console.log(path.matriz)


      // Behaivors

      setInterval(() => {
        this.enemiesBehaivor(this.virus)
      }, 200);
    }

    public update(time: number, delta: number): void {
      this.player.behavior()
      
      this.handlePlayerDoorCollision()
      this.handlePlayerItemsCollision(this.player, this.microchip)
      this.handlePlayerItemsCollision(this.player, this.byte)
      this.handlePlayerItemsCollision(this.player, this.power)
      this.handlePlayerItemsCollision(this.player, this.floppy)
      this.handlePlayerEnemiesCollision(this.player, this.virus)
      this.handlePlayerEnemiesCollision(this.player, this.meanie)
      this.score.setText(this.data.get('score'))
    }

    public positionHorizontal(tile: number): number {
      return this.config.tileWidth* (tile + .5);
    }
    
    public positionVertical(tile: number): number {
      return this.config.tileHeigth * (tile + .5);
    }

    // Collisions

    public handlePlayerDoorCollision(){ 
      if (this.door.y === this.player.y && this.player.x  === this.door.x ) {
        this.scene.start(levelTesting)
      }
    }

    public handlePlayerEnemiesCollision(player: Phaser.GameObjects.Sprite, objects: Phaser.GameObjects.Sprite[]){
      objects.map(object => {
        if (object.y === player.y && object.x === player.x) {
          console.log("Pierde vida")
          this.scene.restart()
        }
      });
    }

    public handlePlayerItemsCollision(player: Phaser.GameObjects.Sprite, objects: Phaser.GameObjects.Sprite[]) {
      objects.map(object => {
        if (object.y === player.y && object.x === player.x) {
          object.destroy();
        }
      });
    }

    public enemiesBehaivor(objects: Character[]){
      objects.map(object => object.behavior())
    }
}