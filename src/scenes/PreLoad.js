class PreLoad extends Phaser.Scene {
    constructor(){
        super('LoadAssets')
    }

    preload() {
        this.load.image("bg_market", "assets/backgrounds/market1.png");

        this.load.image("intern", "assets/sprites/test_spr.png");
    }

    

}
