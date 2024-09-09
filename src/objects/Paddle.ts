import { Scene } from 'phaser';
import { Assets } from '../enums/asset';

export class Paddle extends Phaser.GameObjects.Sprite {
    constructor(scene: Scene, x: number, y: number) {
        // Call the Phaser.Sprite constructor
        super(scene, x, y, Assets.Paddle);

        // Add the paddle to the scene
        scene.add.existing(this);

        // Enable physics on the paddle
        scene.physics.world.enable(this);

        // Initialize the paddle's properties
        this.initializePaddle();
    }

    // Setup paddle properties
    private initializePaddle(): void {
        const body = this.body as Phaser.Physics.Arcade.Body;

        // Set the origin (anchor) for the paddle
        this.setOrigin(0.5, 1);

        // Prevent the paddle from going off-screen
        body.setCollideWorldBounds(true);

        // Make the paddle immovable (it won't be moved by collisions)
        body.immovable = true;
    }
}
