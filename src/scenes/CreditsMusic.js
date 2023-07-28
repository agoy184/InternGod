class CreditsMusic extends Phaser.Scene {
    constructor() {
        super('creditsMusicScene');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '28px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
 
        let smallConfig = {
            fontFamily: 'Verdana',
            fontSize: '17px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/9, 'Credits', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, 2*game.config.height/9, 'Daphne Cheng', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, 3*game.config.height/9, 'Marshall Ye', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, 4*game.config.height/9, 'Abel Goy', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, 5*game.config.height/9, 'Jesse Sinon', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, 6*game.config.height/9, 'Seren Becker', smallConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, 7*game.config.height/9, 'Leonidas ?', smallConfig).setOrigin(0.5);

        this.add.text(3*game.config.width/4, 3*game.config.height/9, 'Michael Shaten', smallConfig).setOrigin(0.5);
        this.add.text(3*game.config.width/4, 4*game.config.height/9, 'AJ Rivas', smallConfig).setOrigin(0.5);
        this.add.text(3*game.config.width/4, 5*game.config.height/9, 'Brandon Jack?', smallConfig).setOrigin(0.5);
        this.add.text(3*game.config.width/4, 6*game.config.height/9, 'Cameron Dodd?', smallConfig).setOrigin(0.5);
        this.add.text(3*game.config.width/4, 7*game.config.height/9, 'Likha Pulido', smallConfig).setOrigin(0.5);

        // instructions
        this.add.text(game.config.width/1.35, 8*game.config.height/9, 'Press R to return to the title screen menu', smallConfig).setOrigin(0.5).setFontSize(12);
        this.add.text(game.config.width/4, 8*game.config.height/9, 'Press D to view tileset credits', smallConfig).setOrigin(0.5).setFontSize(12);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.scene.start("creditsBackgroundScene");    
        }

        if (Phaser.Input.Keyboard.JustDown(keyR)) {
           this.scene.start("menuScene");    
        }
    }

}