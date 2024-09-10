import { Scene } from 'phaser';
import { GameScene } from '../enums/gameScene';

export class GameOver extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    youwin_text: Phaser.GameObjects.Text;

    constructor() {
        super('YouWin');
    }

    create() {
        this.camera = this.cameras.main
        this.cameras.main.setBackgroundColor('#191919');


        this.youwin_text = this.add.text(this.scale.width / 2, this.scale.height / 2, 'You win!', {
            fontFamily: 'Arial', fontSize: 32, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.youwin_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start(GameScene.Game);

        });
    }
}
