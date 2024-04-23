import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {TitleComponent} from'./title/title.component';
import {BigCardComponent} from './big-card/big-card.component';
import {StorieCardsComponent} from './storie-cards/storie-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TitleComponent, BigCardComponent, StorieCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'blog';
}
