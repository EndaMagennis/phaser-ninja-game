import Phaser from "phaser";
class MainMenu extends Phaser.Scene{
    //phaser function which preloads assets for use in a scene
    preload(){
        this.load.image('forest', 'assets/sprites/objects/trees/tree-1.png');
    }
    //phaser fuction to display loaded assets
    create(){
        this.add.image(400, 250, 'forest').setOrigin(0,0);
        this.add.text(400, 250, "Hello there!")
    }
}

export default MainMenu;