import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {TitleComponent} from'./title/title.component';
import {BigCardComponent} from './big-card/big-card.component';
import {StorieCardsComponent} from './storie-cards/storie-cards.component';
import {StorieCardConjuntoComponent} from './storie-card-conjunto/storie-card-conjunto.component';
import {FootComponent} from './foot/foot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TitleComponent, BigCardComponent, StorieCardsComponent, StorieCardConjuntoComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'blog';
}
