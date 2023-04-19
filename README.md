## Desafío 2: Programación orientada a objetos con Phaser

### Enunciado

Se debe diseñar y desarrollar un software, simulando el juego Dexter's Lab: Dexter's Labyrinth

### Análisis del problema

Didi a ingresado al laboratorio de Dexter y a infectado su computadora por lo cual debe repararla y se adentra en el mundo virtual.

Podemos analizar que el juego se ejecuta en 20 x 13 grillas, el movimiento de Dexter funciona moviendose en cada grilla, existe un marco para todo el juego el cual no podemos traspasar, las paredes del laberinto son del mismo tipo. a medida que vamos aumentando de nivel, aparecen nuevos enemigos y laberintos complicados.

Dexter posee 3 vidas, su puntaje es mostrado por pantalla. En cada escena del juego o nuevo laberinto, existen objetos llamados chips, bits y salen la cantidad podemos recoger en cada level. También aparecen otros objetos que nos ayudan a aumentar nuestro score. Otro objeto que se puede apreciar son tornillos los cuales podemos empujar solo moviendonos hacia la direccion que queremos que lo haga, estos nos pueden lastimar si nos cae a la cabeza, tambien puede matar a los enemigos al igual que los demas objetos pero estos otros no a nosotros. Cuando un enemigo muere se transforma en  6 chips, todos los objetos caen grilla a grilla.  


Por lo que podemos identificar algunas funcionalidades 

1. Debemos recoger x cantidad de chips para poder pasar al siguiente nivel.
2. Hay enemigos que te persiguen mas que otros.
3. El juego se puede resetear. 
4. si un mono muere, no se transforma, elimina partes del laberinto a su alrededor 
5.  si un objeto nos cae dos casillas antes hacia la cabeza, moriremos
7. Tenemos 25 niveles, por el momento.

### Muestra del juego

Para entender el juego más a profundidad podemos ver [la siguiente presentación](https://www.youtube.com/watch?v=0GER_22lwRg&t=465s), algunos recursos como sprites se obtuvieron del siguiente [sitio web](https://www.spriters-resource.com/browser_games/pcdexterslabyrinth/?source=genre)


### Clases

A. BootGame: tiene como funcionalidad cargar los recursos gráficos y otros para la iniciación del juego.
B. PlayGame: tiene como funcionalidad mostrar los recursos gráficos en la escena.
C. Player: contiene todo las caracteristicas que posee Dexter en el laberinto.
D. Door :  contiene la animacion y permisos que posee un portal para pasar al siguiente nivel.

**Items**

1. Microchip: small computer chips that are required to unlock exits so Dexter can go to the next level.
2. Byte: A small pole with the numbers 1 and 0. 20 of these are required to get an extra life. The numbers can have three different colors, but it is purely cosmetic.
3. Power:  small atoms that add to the overall score.
4. Floppy: floppy disks that add to the overall score.
5. Bolt: a giant screw that can crush both enemies and Dexter himself if he's not too careful. It cannot be picked up.

**Enemies**

1. Virus: a small, bug-like creature that destroys Dexter the instant he touches it. It moves in a square-like pattern.
2. Nanorobot: robots that always move in a straight line. They only change direction upon hitting a wall.
3. Blob: an enemy that multiplies, destroying anything in its path.
4. Meanie: small androids that move towards Dexter.

 
### Documentación

Para poder realizar este juego se utilizo nodeJs para la ejecución, ya que a partir de la version 3.x de Phaser es requerimiento utilizarlo en un servidor. El archivo raiz del juego es "index.js", a partir de ahi webpack empaqueta todo el programa.

1. [Documentación introducción](https://phaser.io/tutorials/getting-started-phaser3/index)
2. [Documentación Phaser 3.x](https://github.com/photonstorm/phaser3-docs)
revisar este
3. [Phaser 3.x - Ejemplos](http://labs.phaser.io)  
4. [Phaser 3.x - Ejemplos Repositorio](https://github.com/photonstorm/phaser3-examples)
5. [Phaser 3 HTML5 Cross Platform Game Development](https://triqui.gumroad.com/l/FcjQw)
6. [Phaser 3 HTML5 Cross Platform Game Development - Repositorio](https://github.com/ajbkr/HTML5-Cross-Platform-Game-Development-Using-Phaser-3)
7. [Documentación Webpack](https://webpack.js.org/configuration/)

8. [maze 2d](https://www.emanueleferonato.com/2019/10/08/understanding-advanced-collision-management-with-matter-physics-using-risky-road-game-prototype/)
9. [BFS] (https://blog.ourcade.co/posts/2020/phaser-3-point-click-pathfinding-movement-tilemap/)

10. [Behaivor Pacman gosth](https://gameinternals.com/understanding-pac-man-ghost-behavior)
11. [beahvor pac 2 ](https://github.com/ourcade/pac-man-ghost-ai-phaser3/blob/master/src/game/ghost-ai/utils/determineDirectionFromTarget.ts)
12. [3 beha](https://github.com/servetgulnaroglu/pacman-js/blob/master/ghost.js)
 






Dexter's Labyrinth is a maze-puzzle game where the player takes control of Dexter, a boy genius who must repair his infected computer in a virtual world. The game is played on a 20 x 13 grid, and Dexter moves one grid square at a time. The player must collect chips to progress to the next level, while avoiding enemies and hazards.

### Gameplay

Dexter starts with three lives and a score of zero. The player must navigate through each level, avoiding enemies and hazards such as falling objects and walls. The game features different types of enemies, some of which are more difficult to evade than others. As the player progresses through the levels, new enemies and more complex mazes are introduced.

The game includes objects called chips and bits that the player can collect to increase their score. Dexter can also push screws, which can be used to eliminate enemies or create paths through the maze. However, if a screw falls on Dexter's head, he will lose a life. When an enemy is defeated, it transforms into six chips.

### Copyright

This project is an open source clone of the game Dexter's Labyrinth. While the original game is no longer available, some of the sprites used in this project belong to the original creators.

Please note that this project is not intended for commercial use and is solely for educational purposes as part of a programming course. All credit for the original game and its assets goes to their respective owners.

If you are the owner of any of the assets used in this project and would like them removed, please contact me and I will take appropriate action.

I do not claim ownership over any of the original game's intellectual property, and this project is not affiliated with, endorsed by, or sponsored by the original creators or publishers of the game.

Thank you for understanding and respecting the intellectual property rights of others.


### Installation

To play the game, simply download the files and open the index.html file in your browser. The game can be played with a keyboard.

### License

This project is licensed under the MIT License. Feel free to use, modify and distribute the code, as long as you include the original license and copyright information.

### How to Contribute

Contributions to the game are welcome. If you would like to make changes or add new features, please submit a pull request. Before submitting a pull request, please ensure that your changes are in line with the project's goals and do not infringe on any copyrights.

### Acknowledgments

This game was inspired by the original game Dexter's Laberynth. Thank you to the creators of the original game for the inspiration.