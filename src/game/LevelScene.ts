 
import { buttonResetImg } from "../config/sprite";
import { tiles, levelTesting} from "../config/level"; 
import Bolt from "./Bolt";
import Byte from "./Byte"; 
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
    public pathFinding!: PathFinding;
    public chip!: Phaser.GameObjects.Text;
    public bit!: Phaser.GameObjects.Text;
    public level!: Phaser.GameObjects.Text;

    constructor(config : any) {
        super({
          key : config.key
        })
        this.config = config
    }

    public init(data) {
      this.inputs = new Inputs(this)
      this.data = new Phaser.Data.DataManager(this)
      this.data.set('score', data.score)
      this.data.set('life', data.life)
      this.data.set('level', this.config.levelNumber + 1)
    }
    
    public create (): void {   

      if(this.data.get('life') == 0){ 
        this.scene.setVisible(false)
        this.game.scene.start('InitGame')
      }
      
      this.map = this.make.tilemap(tiles)
      
      const container = this.map.addTilesetImage('principal','mainGame')
      const gameContainer = this.map.createLayer('static', container, 0, 0)
      gameContainer.setDepth(2)

      const laberynth = this.map.addTilesetImage('sprites2', 'levelTiles')
      const layer = this.map.createLayer(this.config.levelNumber, laberynth, 0, 0)
      layer.setDepth(1)

      // Button Reset

      const buttonReset = new Phaser.GameObjects.Image(this, 367, 317, buttonResetImg.btn)
      buttonReset.displayWidth= 65
      buttonReset.displayHeight= 25
      this.add.existing(buttonReset)
      buttonReset.setDepth(3)

      buttonReset.setInteractive()
      buttonReset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.restart()
      })

      // Life counter

      const lifeBackground = new Phaser.GameObjects.Image(this, 45, 317, 'back-life')
      lifeBackground.displayWidth= 75
      lifeBackground.setDepth(3)
      this.add.existing(lifeBackground)

      const life1 = new Phaser.GameObjects.Image(this, 25, 317, 'player-life')
      const life2 = new Phaser.GameObjects.Image(this, 45, 317, 'player-life')
      const life3 = new Phaser.GameObjects.Image(this, 65, 317, 'player-life')
      life1.setDepth(3)
      life2.setDepth(3)
      life3.setDepth(3)
      this.add.existing(life1)
      this.add.existing(life2)
      this.add.existing(life3)

      // missin life
      if(this.data.get('life') == 2){
        life3.setAlpha(.7,.4,.4,.3)
      }else if(this.data.get('life') == 1){
        life3.setAlpha(.7,.4,.4,.3)
        life2.setAlpha(.7,.4,.4,.3)
      }else if(this.data.get('life') == 0){
        life3.setAlpha(.7,.4,.4,.3)
        life2.setAlpha(.7,.4,.4,.3)
        life1.setAlpha(.7,.4,.4,.3) 
      }

      
     
      // MapPathFinding
      this.pathFinding = new PathFinding(this, 20, 13)
      this.pathFinding.main()

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

       // Info
       this.data.set('level', this.config.levelNumber+1);
       this.data.set('chip', this.microchip.length)
       this.data.set('bit', this.byte.length) 
       
       
       const score = this.data.get('score')
       const chip = this.data.get('chip')
       const bit = this.data.get('bit')
       const level = this.data.get('level') 
       this.score = this.add.text(111, 316,  score, { fontFamily: 'CustomFont', fontSize: '9px' })
       this.score.setAlign('right')
       this.score.setDepth(2)
 
       this.chip = this.add.text(198, 316, chip, { fontFamily: 'CustomFont', fontSize: '9px' })
       this.bit = this.add.text(251, 316, bit, { fontFamily: 'CustomFont', fontSize: '9px' })
       this.level = this.add.text(291, 316, level, { fontFamily: 'CustomFont', fontSize: '9px' })
 
       this.chip.setAlign('left') 
       this.chip.setDepth(2)
       this.bit.setAlign('right')
       this.bit.setDepth(2)
       this.level.setAlign('right')
       this.level.setDepth(2)

      // Enemies
      const virus = this.config.enemies.virus
      this.virus = virus.map((virus) => new Virus(this, this.positionHorizontal(virus.x), this.positionVertical(virus.y)))
       
      
      const meanies = this.config.enemies.meanie
      this.meanie = meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y)))
       

     
      // Behaivors
      setInterval(() => {
        this.meanie.map(m => m.behavior())
        this.virus.map(v => v.behavior())
      }, 400);
      
      
    }

    public update(time: number, delta: number): void { 
      this.player.behavior()  
      this.bolt.map(b => b.main())
      this.handlePlayerDoorCollision()
      this.handlePlayerBoltCollision(this.player, this.bolt)
      this.handlePlayerItemsCollision(this.player, this.microchip)
      this.handlePlayerItemsCollision(this.player, this.byte)
      this.handlePlayerItemsCollision(this.player, this.power)
      this.handlePlayerItemsCollision(this.player, this.floppy)
      this.handlePlayerEnemiesCollision(this.player, this.virus)
      this.handlePlayerEnemiesCollision(this.player, this.meanie)
      this.chip.setText(this.data.get('chip'))
      this.bit.setText(this.data.get('bit'))
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
        this.scene.start(this.config.keyNext,  {score: Number(this.data.get('score')), life: Number(this.data.get('life'))})
      }
    }

    public handlePlayerEnemiesCollision(player: Phaser.GameObjects.Sprite, objects: Phaser.GameObjects.Sprite[]){
      objects.map(object => {
        if (object.y === player.y && object.x === player.x) {
          this.data.set('life', this.data.get('life') - 1)
          this.scene.restart({score: Number(this.data.get('score')),life: Number(this.data.get('life'))})
        }
      });
    }

    public handlePlayerBoltCollision(player: Phaser.GameObjects.Sprite, objects: Bolt[]){
      objects.map(object => {
        if (object.y === player.y && object.x === player.x) {
          this.player.moveTilePosition(object)
        }
      });
    }
    

    public handlePlayerItemsCollision(player: Player, objects: (Microchip | Byte | Floppy | Power)[]) {
      objects.map(object => {
        if (object.active == true && object?.y === player.y && object?.x === player.x) {
          object.removeSprite()
        }
      }); 
    }
 
 
}