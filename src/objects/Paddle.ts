import { Scene } from 'phaser';
import { Assets } from '../enums/asset';

export class Paddle extends Phaser.GameObjects.Sprite {
    acceleration: number;
    maxVelocity: number;
    drag: number;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;


    constructor(scene: Scene, x: number, y: number) {
        // Call the Phaser.Sprite constructor
        super(scene, x, y, Assets.Paddle);

        // Add the paddle to the scene
        scene.add.existing(this);

        // Enable physics on the paddle
        scene.physics.world.enable(this);

        this.acceleration = 20
        this.maxVelocity = 180
        this.drag = 4

        if (!scene.input.keyboard) {
            return
        }
        this.cursors = scene.input.keyboard.createCursorKeys();

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

    public handleMovement() {
        const body = this.body as Phaser.Physics.Arcade.Body;
        let velocity = body.velocity.x;

        // check for paddle movement
        if (this.cursors.left.isDown) {
            velocity -= this.acceleration;
        } else if (this.cursors.right.isDown) {
            velocity += this.acceleration;
        } else {
            // if no velocity, reduce accelaration by drag
            if (velocity > 0) {
                velocity -= this.drag;
            } else {
                velocity += this.drag;
            }
            // if velocity is less than drag, stop paddle to
            // prevent idle drifting
            if (velocity < (this.drag * 1.1)) {
                velocity = 0;
            }
        }
        // limit velocity to maximum
        if (Math.abs(velocity) > this.maxVelocity) {
            if (velocity < 0) {
                velocity = this.maxVelocity * -1;
            } else {
                velocity = this.maxVelocity;
            }
        }
        // set paddle velocity to value held in Scene object's velocity property
        body.setVelocityX(velocity)
    }
}
