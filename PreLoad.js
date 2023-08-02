class Load extends Phaser.Scene {
    constructor(){
        super('preLoad')
    }

    preload() {
        this.load.image("bg_market", "assets/backgrounds/market1.png");

        this.load.image("intern", "assets/sprites/test_spr.png");

        this.load.image("grandpa","assets/sprites/grandpa-normal.png")
    }

    

}
