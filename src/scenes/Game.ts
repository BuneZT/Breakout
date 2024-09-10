import { Scene } from 'phaser';
import { Ball } from '../objects/Ball';
import { Paddle } from '../objects/Paddle';
import { GameScene } from '../enums/gameScene';
import { Brick } from '../objects/Brick';

export class Game extends Scene {
    ball: Ball;
    paddle: Paddle;
    bricks: Phaser.Physics.Arcade.StaticGroup
        ;


    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor('#191919');
        this.ball = new Ball(this, this.scale.width * 0.5, this.scale.height - 25);
        this.paddle = new Paddle(this, this.scale.width * 0.5, this.scale.height - 5,);
        this.physics.add.collider(this.ball, this.paddle);
        this.physics.world.on("worldbounds", this.detectBounds, this);
        const bricksInfo = {
            width: 50,
            height: 20,
            count: {
                row: 3,
                col: 7
            },
            offset: {
                top: 50,
                left: 60
            },
            padding: 10
        };
        this.bricks = Brick.generateBricks(this, bricksInfo);
    }



    update(): void {
        this.paddle.handleMovement();

    }

    private detectBounds(_body: any, _blockedUp: any, blockedDown: any, _blockedLeft: any, _blockedRight: any) {
        if (blockedDown) {
            this.scene.start(GameScene.GameOver);

        }
    }


}
