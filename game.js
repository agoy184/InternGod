window.onload = function () {

    window.gameSettings = {
        playerSpeed: 400,
    }
    
    var config = {
        width: 1600,
        height: 900,
        backgroundColor: 0x000000,
        scene: [PlayerController],
        physics: {
            default: "arcade",
            arcade:{
                debug: false
            }
        }
    }
    
    
    
    var game = new Phaser.Game(config);
    
}