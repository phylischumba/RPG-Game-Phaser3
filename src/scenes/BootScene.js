import Phaser from 'phaser';
import items from '../../assets/images/items.png';
import characters from '../../assets/images/characters.png';
import goldSound from '../../assets/audio/Pickup.wav';

export default class BootScene extends Phaser.Scene {
 
  constructor() {
      super('Boot');
  }

  preload() {
    this.load.image('button1', 'assets/images/ui/blue_button01.png');
    this.load.image('button2', 'assets/images/ui/blue_button02.png');
    this.load.spritesheet('items', 'assets/images/items.png', {frameWidth:32, frameHeight:32});
    this.load.spritesheet('characters', 'assets/images/characters.png', {frameWidth:32, frameHeight:32});
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
  }
  
  create() {
    this.scene.start('Title');
  }

}