import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { GameService } from './game.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  name = 'Juego Piedra, Papel, Tijera';

  resultado: string;
  puntosUsuario = 0;
  puntosComputadora = 0;
  seleccion: string;

  constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.resultado = 'Esperando Jugada ...';
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    this.seleccion = result.compOption;
    this.resultado = result.message;
    this.puntosUsuario += result.userAdd;
    this.puntosComputadora += result.compAdd;
  }
}

bootstrapApplication(App);
