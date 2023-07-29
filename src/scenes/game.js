window.onload = function () {

    window.gameSettings = {
        playerSpeed: 200,
    }
    
    var config = {
        width: 1920,
        height: 1080,
        backgroundColor: 0x000000,
        scene: [PreLoad, PlayerController],
        physics: {
            default: "arcade",
            arcade:{
                debug: false
            }
        }
    }
    
    
    
    var game = new Phaser.Game(config);
    
}