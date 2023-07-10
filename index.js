import Phaser from "phaser";
//import MainMenu from "./assets/scripts/mainMenu";
import MainMenu from "./assets/scripts/mainMenu";
//settings for game window
const config ={
    width: 800,
    height: 500,
    type: Phaser.AUTO,//rendering which attempts WebGL but falls back to canvas

}

//create a game constant
//instantiates and new Phaser.Game class using the config settings
const game = new Phaser.Game(config);

//adding the mainMenu screen to the scene
game.scene.add('mainMenu', MainMenu);

//starting the game with the main menu
game.scene.start('mainMenu');