import { Scene } from 'phaser';
import { Assets } from '../enums/asset';

export class Ball extends Phaser.GameObjects.Sprite {

    constructor(scene: Scene, x: number, y: number) {
        // Call the Phaser.Sprite constructor
        super(scene, x, y, Assets.Ball);

        // Add the sprite to the scene
        scene.add.existing(this);

        // Enable physics on this sprite
        scene.physics.world.enable(this);

        // Set ball properties
        this.initializeBall();
    }

    // Initialize ball properties
    private initializeBall(): void {
        const body = this.body as Phaser.Physics.Arcade.Body;

        this.setOrigin(0.5);
        // Set the ball to collide with the world bounds
        body.setCollideWorldBounds(true);

        // Set the ball to bounce off objects while retaining full velocity
        body.setBounce(1);

        // Set initial velocity of the ball
        body.setVelocity(150, -150);

        // tell the ball to respond to events when colliding with world bounds
        body.onWorldBounds = true;
    }

}
