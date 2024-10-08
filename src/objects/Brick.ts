import { Scene } from 'phaser';
import { Assets } from '../enums/asset';
import { BrickInfo } from '../interfaces/BrickInfo';


export class Brick extends Phaser.Physics.Arcade.Sprite {


    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, Assets.Brick);
    }

    // Static method to generate a grid of bricks
    static generateBricks(scene: Scene, bricksInfo: BrickInfo): Phaser.Physics.Arcade.StaticGroup {
        const bricks = scene.physics.add.staticGroup();


        for (let column = 0; column < bricksInfo.count.col; column++) {
            for (let row = 0; row < bricksInfo.count.row; row++) {
                // Calculate the position for each brick
                const brickX = (column * (bricksInfo.width + bricksInfo.padding)) + bricksInfo.offset.left;
                const brickY = (row * (bricksInfo.height + bricksInfo.padding)) + bricksInfo.offset.top;

                // Create a new Brick object and add it to the static group
                bricks.create(brickX, brickY, Assets.Brick);
            }
        }

        return bricks;
    }
}
