import { Scene } from 'phaser';
import { Ball } from '../objects/Ball';
import { Paddle } from '../objects/Paddle';
import { GameScene } from '../enums/gameScene';

export class Game extends Scene {
    ball: Ball;
    paddle: Paddle;

    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor('#191919');
        this.ball = new Ball(this, this.scale.width * 0.5, this.scale.height - 25);
        this.paddle = new Paddle(this, this.scale.width * 0.5, this.scale.height - 5,);
        this.physics.add.collider(this.ball, this.paddle);
        this.physics.world.on("worldbounds", this.detectBounds, this);
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
