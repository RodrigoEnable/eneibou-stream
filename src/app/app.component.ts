import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Eneibou Stream';
  showInitialInfo = true;

  cards = [
    { title: 'O diário do Sr. Lourdes', link: 'diario-sr-lourdes', photo: 'assets/img/lourdes.jpg', isDead: true },
    { title: 'O diário do policial Coleman', link: 'diario-policial-coleman', photo: 'assets/img/coleman.jpg', isDead: true },
    { title: 'O diário do policial Fox', link: 'diario-policial-fox', photo: 'assets/img/george.jpg', isDead: false },
    { title: 'O diário da enfermeira Beth', link: 'diario-enfermeira-beth', photo: 'assets/img/beth.jpg', isDead: false }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showInitialInfo = !this.router.url.includes('diario');
    });
  }
}
