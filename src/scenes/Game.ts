import { Scene } from 'phaser';
import { Ball } from '../objects/Ball';

export class Game extends Scene {
    ball: Ball;;
    canvas: HTMLCanvasElement

    constructor() {
        super('Game');
    }

    create() {
        this.ball = new Ball(this, this.canvas.width * 0.5, this.canvas.height - 25);
    }

    preload() {
        this.canvas = this.sys.game.canvas;
    }


}
