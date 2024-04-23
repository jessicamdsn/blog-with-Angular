import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-storie-cards',
  standalone: true,
  imports: [],
  templateUrl: './storie-cards.component.html',
  styleUrl: './storie-cards.component.css'
})
export class StorieCardsComponent {
  @Input() Num:number = 0;
  @Input() tituloStorie:string = '';
  @Input() autorData:string = '';
  @Input() imagemUrl: string = '';
  }
