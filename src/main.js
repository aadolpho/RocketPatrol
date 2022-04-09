console.log("Hello from main.js");

let config = { 
    type: Phaser.CANVAS, 
    width: 640, 
    height: 480,
    scene: Menu
};

let game = new Phaser.Game(config);