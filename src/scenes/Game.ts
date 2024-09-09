import { Scene } from 'phaser';
import { Ball } from '../objects/Ball';
import { Paddle } from '../objects/Paddle';

export class Game extends Scene {
    ball: Ball;
    paddle: Paddle;
    canvas: HTMLCanvasElement

    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor('#191919');
        this.ball = new Ball(this, this.canvas.width * 0.5, this.canvas.height - 25);
        this.paddle = new Paddle(this, this.canvas.width * 0.5, this.canvas.height - 5,);
        this.physics.add.collider(this.ball, this.paddle);
    }

    preload() {
        this.canvas = this.sys.game.canvas;
    }

    update(): void {
        this.paddle.handleMovement();

    }


}
