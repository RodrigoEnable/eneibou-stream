import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eneibou Stream';

  cards = [
    { title: 'O diário do Sr. Lourdes', link: '' },
    { title: 'Card 2', link: '' }
  ];
}
