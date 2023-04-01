import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class App {
  name = 'Angular';

  resultado: string;
  puntosUsuario = 0;
  puntosComputadora = 0;
}

bootstrapApplication(App);
