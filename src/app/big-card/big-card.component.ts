import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
@Input() categoriaNoticia:string = '';
@Input() tituloNoticia:string = '';
@Input() paragrafoNoticia:string = '';
@Input() imagemUrl: string = '';
}
