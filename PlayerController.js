class PlayerController extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

  preload() {
    this.load.image("bg_market", "assets/backgrounds/market1.png");

    this.load.image("intern", "assets/sprites/test_spr.png");
  }

  create()
  {
      this.background = this.add.image(0, 0, 'bg_market').setOrigin(0,0);
  
      this.background.displayWidth = this.sys.game.config.width;
      this.background.displayHeight = this.sys.game.config.height;
      
      this.player = this.physics.add.sprite(this.game.config.width / 2, this.game.config.height /2 , "intern");
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.player.setCollideWorldBounds(true);
  }
  
  update(){
    this.movePlayerManager();
  }

  movePlayerManager(){
    if (this.cursorKeys.left.isDown){
        this.player.setVelocityX(-gameSettings.playerSpeed);
    }
    else if (this.cursorKeys.right.isDown){
        this.player.setVelocityX(gameSettings.playerSpeed);
    }
    else {
        this.player.setVelocityX(0);
    }
    
    if(this.cursorKeys.up.isDown){
        this.player.setVelocityY(-gameSettings.playerSpeed);
    }
    else if(this.cursorKeys.down.isDown){
        this.player.setVelocityY(gameSettings.playerSpeed);
    }
    else {
        this.player.setVelocityY(0);
    }
}

}
