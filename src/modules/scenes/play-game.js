import Phaser from 'phaser'

import gameOptions, { directions } from './../config/gameOptions'

const { LEFT, RIGHT, UP, DOWN } = directions

class PlayGame extends Phaser.Scene {
  constructor () {
    super('PlayGame')
  }

   

  create () {
     

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
 

}

export default PlayGame