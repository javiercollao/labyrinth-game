import Phaser from 'phaser'

import gameOptions, { directions, tilesConfig } from './../config/gameOptions'

const { LEFT, RIGHT, UP, DOWN } = directions

class PlayGame extends Phaser.Scene {
  constructor () {
    super('PlayGame')
  }

   

  create () {
    this.canMove = true
    // Creando mapa
    const map = this.make.tilemap(tilesConfig)
    /**  Esta es una llamada a la imagen que se usa en el mapa*/
    const tileset = map.addTilesetImage('drawtiles-spaced','tiles')
    //const tilesetCar = map.addTilesetImage('car','car')
    /**  Esta crea la capa piso del mapa */
    const layer = map.createLayer('piso', tileset, 0, 0)
    /**  Esta crea la capa sprite del mapa */
    //const layer2 = map.createLayer('sprite', tilesetCar, 0, 0)

    this.player = this.add.image(tilesConfig.tileWidth+(tilesConfig.tileWidth/2), tilesConfig.tileHeight+(tilesConfig.tileHeight/2), 'car');
    

    this.input.keyboard.on('keydown', this.handleKey, this)
    this.input.on('pointerup', this.handleSwipe, this)
  }

  
  handleKey (e) {
    if (this.canMove) {
      switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.makeMove(LEFT)
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
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
  }

  handleSwipe (e) {
    const swipeTime = e.upTime - e.downTime
    const swipe = new Phaser.Geom.Point(e.upX - e.downX, e.upY - e.downY)
    console.log(`Movement time: ${swipeTime}ms`)
    console.log(`Horizontal distance: ${swipe.x} pixels`)
    console.log(`Vertical distance: ${swipe.y} pixels`)   
  }
 
  makeMove(d){

    if(d === RIGHT){
      this.player.x += 32
      console.log("D")
    }else if(d === LEFT){
      this.player.x -= 32
    }else if(d === DOWN){
      this.player.y += 32
    }else{
      this.player.y -= 32
    }

  }

}

export default PlayGame