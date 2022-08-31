import 'phaser' 
import { directions, tilesConfig, tileType} from '../config/gameOptions'
import Door from '../primary/door'; 
import Player from '../primary/player';

const { LEFT, RIGHT, UP, DOWN } = directions

export default class PlayGame extends Phaser.Scene {
  
  player!: Player; 
  layer!: Phaser.Tilemaps.TilemapLayer; 
  level!: number;
  capa!: Phaser.Tilemaps.TilemapLayer;
 
  constructor() {
    super({
      key :'PlayGame'
    })
    this.level = 1;
  }
   
  create () {
    this.initLayer();
    
    this.player = new Player(this, this.positionHorizontal(4), this.positionVertical(4));
    this.player.standAnimation()

    // this.Level1Objects()
 
    this.player.setDepth(2)
    this.layer.setDepth(0)
    this.capa.setDepth(1) 
     
    this.canMove()
    this.checkTilePlayer()
    this.input.keyboard.on('keydown', this.handleKey, this)
    //this.input.on('pointerup', this.handleSwipe, this)
  }
  

  /**
   *  @desc Calcula la posicion de un tile horizontal
  **/
  positionHorizontal (tile) : number {
    return tilesConfig.tileWidth*tile+(tilesConfig.tileWidth/2)
  }

  /**
   *  @desc Calcula la posicion de un tile veritcal
  **/
  positionVertical (tile): number {
    return tilesConfig.tileHeight*tile+(tilesConfig.tileHeight/2)
  }
  
  /**
   *  @desc gestiona los mapas de cada nivel
  **/
  initLayer() : void {
    const map = this.make.tilemap(tilesConfig) 
    const tilesetMain = map.addTilesetImage('principal','mainGame')  
    this.capa = map.createLayer('static', tilesetMain, 0, 0)
    const tileset = map.addTilesetImage('sprites2','levelTiles')
    
    switch(this.level){
        case 1: this.layer = map.createLayer('level1', tileset, 0, 0);
        break;
        case 2: this.setNewLayer('level2', 1, 1, map, tileset);
        break;
        case 3: this.setNewLayer('level3', 0, 12, map, tileset);
        break;
        case 4: this.setNewLayer('level4', 0, 0, map, tileset);
        break;
        case 5: this.setNewLayer('level5', 0, 13, map, tileset);
        break;
      
    }
  }

  /**
   *  @desc Modifia el nivel del juego
  **/
  setLevel() : number {
    return this.level++;
  }

  /**
   *  @desc Actualiza el mapa del nivel actual y lo inicializa
  **/
  setNewLayer(name: string, posX: number, posY: number, map: Phaser.Tilemaps.Tilemap, tileset: Phaser.Tilemaps.Tileset) : void{
    this.layer.destroy(true)
    this.layer = map.createLayer(name, tileset, 0, 0)
    this.layer.setDepth(0)
    this.capa.setDepth(1) 
    this.player.setPosition(this.positionHorizontal(posX), this.positionVertical(posY))
    this.canMove()
    this.checkTilePlayer()
  }
   
  /**
   *  @desc Gestiona los controles
  **/
  handleKey(e): void{
      switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.makeMove(LEFT)
          this.player.walkLeftAnimation();
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
          this.player.walkRightAnimation();
          break
        case 'KeyW':
        case 'ArrowUp':
          this.makeMove(UP)
          break
        case 'KeyS':
        case 'ArrowDown':
          this.makeMove(DOWN)
          break
      } 
  }

  // handleSwipe(e) {
  //   const swipeTime = e.upTime - e.downTime
  //   const swipe = new Phaser.Geom.Point(e.upX - e.downX, e.upY - e.downY)
  //   console.log(`Movement time: ${swipeTime}ms`)
  //   console.log(`Horizontal distance: ${swipe.x} pixels`)
  //   console.log(`Vertical distance: ${swipe.y} pixels`)   
  // }
 
  /**
   *  @desc Se encarga de mover al personaje principal en la escena
  **/
  makeMove(d): void{
    if(d === RIGHT && this.player.getCanMoveRight()){
      this.player.rightMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === LEFT && this.player.getCanMoveLeft()){
      this.player.leftMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === DOWN && this.player.getCanMoveDown()){
      this.player.downMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === UP && this.player.getCanMoveUp()){
      this.player.upMovement()
      this.canMove()
      this.checkTilePlayer()
    }
  }

  /**
   *  @desc Modifica los permisos del jugador de moverse a las casillas disponibles en la escena
  **/
  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

  nextTileRightIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getNextRightPosition(), this.player.getPositionY(), true); 
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveRight(false) : this.player.setCanMoveRight(true)
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getNextLeftPosition(), this.player.getPositionY(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveLeft(false) : this.player.setCanMoveLeft(true)
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextUpPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveUp(false) : this.player.setCanMoveUp(true)
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextDownPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveDown(false) : this.player.setCanMoveDown(true)
  }

  /**
   *  @desc Calcula la posicion de un tile horizontal
  **/
  checkTilePlayer(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(), true);

    if(tile.index === tileType.block.a || tileType.block.b || tile.index === 95 || tile.index === 0){
      this.layer.removeTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(),false)
    }

  }

  // Level1Objects(): void{
  //    // Puntos
  //    let p1 = new Point(this,this.positionHorizontal(11), this.positionVertical(5) )
  //    p1.animation('point1')
  //    let p2 = new Point(this,this.positionHorizontal(18), this.positionVertical(5) )
  //    p2.animation('point1')
  //    // Ships
  //    let ship1 = new Point(this,this.positionHorizontal(19), this.positionVertical(14) )
  //    ship1.animation('ship')
  //    let ship2 = new Point(this,this.positionHorizontal(20), this.positionVertical(13) )
  //    ship2.animation('ship')
  //    let ship3 = new Point(this,this.positionHorizontal(21), this.positionVertical(13) )
  //    ship3.animation('ship')
  //    let ship4 = new Point(this,this.positionHorizontal(21), this.positionVertical(14) )
  //    ship4.animation('ship')
  //    let ship5 = new Point(this,this.positionHorizontal(20), this.positionVertical(14) )
  //    ship5.animation('ship')
  //    // Puertas
  //    let door = new Door(this,this.positionHorizontal(21), this.positionVertical(4) )
  //    door.animation()

  //    //Enemy
  //    let screw1 = new Enemy(this,this.positionHorizontal(19), this.positionVertical(13) )
  //    screw1.animation('screw')

  // }

 
}
