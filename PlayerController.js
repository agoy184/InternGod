class PlayerController extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.image("bg_market", "assets/backgrounds/market1.png");
    this.load.image("intern", "assets/sprites/test_spr.png");
    this.load.image("grandpa", "assets/sprites/grandpa-normal.png");
    this.load.image("dialoguebox","assets/dialog_images/dialog_box.png");
  }

  create() {
    this.Ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.isOverlapping = false;

    this.background = this.add.image(0, 0, 'bg_market').setOrigin(0,0);
    this.background.displayWidth = this.sys.game.config.width;
    this.background.displayHeight = this.sys.game.config.height;

    this.player = this.physics.add.sprite(this.game.config.width / 2, this.game.config.height / 2 , "intern");
    this.grandpa = this.physics.add.sprite(this.game.config.width / 4 , this.game.config.height / 4 , "grandpa").setScale(0.5);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.npc = this.physics.add.group();
    this.npc.add(this.grandpa);

    this.physics.add.overlap(this.player, this.npc, this.Overlapped, null, this);
  }

  update() {
    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.Ekey) && this.isOverlapping) {
      this.isOverlapping = false;
      this.OpenDialogue();
    }
  }

  Overlapped(player, npc) {
    this.isOverlapping = true;
  }

  OpenDialogue() {
    this.dialogue = this.add.sprite(this.game.config.width / 2, this.game.config.height - 100, "dialoguebox").setScale(2.0);
  }

  movePlayerManager() {
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
