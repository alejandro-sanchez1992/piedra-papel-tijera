import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  private getComputerChoice(): string {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  game(userchoice: string): {
    message: string;
    userAdd: number;
    compAdd: number;
    compOption: string;
  } {
    let comput = this.getComputerChoice();
    const playUserComp = userchoice + comput;

    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
      compOption: string;
    };

    switch (playUserComp) {
      // Gana el usuario
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: 'Le ganas a la computadora',
          userAdd: 1,
          compAdd: 0,
          compOption: comput,
        };
        break;

      // Gana la computadora
      case 'sr':
      case 'ps':
      case 'rp':
        playStatus = {
          message: 'La computadora ha ganado',
          userAdd: 0,
          compAdd: 1,
          compOption: comput,
        };
        break;

      // Empates
      case 'ss':
      case 'pp':
      case 'rr':
        playStatus = {
          message: 'Juego empatado',
          userAdd: 0,
          compAdd: 0,
          compOption: comput,
        };
        break;
    }

    return playStatus;
  }
}
