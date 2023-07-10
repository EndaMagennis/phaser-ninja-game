import Phaser from "phaser";


//settings for game window
const config ={
    width: 800,
    height: 500,
    type: Phaser.AUTO,//rendering which attempts WebGL but falls back to canvas

}

//create a game constant
//instantiates and new Phaser.Game class using the config settings
const game = new Phaser.Game(config);