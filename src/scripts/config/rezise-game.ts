export default (game: Phaser.Game) => function () {
    const canvas = document.querySelector('canvas')!
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const windowRatio = windowWidth / windowHeight
    const gameRatio = Number(game.config.width) / Number(game.config.height)
  
    if (windowRatio < gameRatio) {
      canvas.style.width = `${windowWidth}px`
      canvas.style.height = `${windowWidth / gameRatio}px`
    } else {
      canvas.style.width = `${windowHeight * gameRatio/2}px`
      canvas.style.height = `${windowHeight/2}px`
    }
  }