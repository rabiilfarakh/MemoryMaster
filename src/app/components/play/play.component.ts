import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  showColor: boolean = false;
  color: string = 'blue';
  countdown: number = 5;
  intervalId: any;
  colorChoices: string[] = ['red', 'green', 'blue', 'yellow'];
  userAnswer: string = '';
  successMessage: string = '';
  gameStarted: boolean = false; // Indique si le jeu a commencé

  startGame() {
    this.gameStarted = true; // Le jeu commence
    this.showColorBox(); // Affiche la couleur
  }

  showColorBox() {
    this.showColor = true;
    this.countdown = 5;
    this.successMessage = '';
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.showColor = false;
        clearInterval(this.intervalId);
        this.showColorChoices();
      }
    }, 1000);
  }

  showColorChoices() {
    this.colorChoices = this.colorChoices.sort(() => Math.random() - 0.5); // Mélange les couleurs
  }

  checkAnswer(selectedColor: string) {
    if (selectedColor === this.color) {
      this.successMessage = 'Bravo, vous avez choisi la bonne couleur!';
    } else {
      this.successMessage = 'Désolé, essayez encore.';
    }
  }
}
