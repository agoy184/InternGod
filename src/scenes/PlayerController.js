class PlayerController extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create()
    {
        this.background = this.add.image(0, 0, 'bg_market').setOrigin(0,0);
    }





}
