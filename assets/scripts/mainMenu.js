import Phaser from "phaser";

class MainMenu extends Phaser.Scene{
    //phaser function which preloads assets for use in a scene
    preload(){
        this.load.image('forest', 'assets/backgrounds/forest-background/layer-1.png');
    }
    //phaser fuction to display loaded assets
    create(){
        this.add.image(800, 500, 'forest').setOrigin(0,0);
    }
}

export default MainMenu;