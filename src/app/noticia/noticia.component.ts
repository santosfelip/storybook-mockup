import { Component } from '@angular/core';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  public image: string = 'https://images.unsplash.com/photo-1603270569894-2ff545c46ad5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
  public title: string = 'BAUDUCCO ALINHA PANETTONE'
  public text: string = 'A Crispim Porter + Boguski, responsável pela comunicação da linha de panettones da Bauducco no mercado internacional, também vai responder pela estratégia publicitária no Brasil...'
  public date: Date = new Date();

  constructor() { 

  }

}
