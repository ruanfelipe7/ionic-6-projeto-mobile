import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nomeUsuario: string = "Ruan Felipe"
  constructor() { }

  public somaDoisNumeros(numero1:number, numero2:number): void{
      alert(numero1+numero2);
  }

  ngOnInit() {
    //this.somaDoisNumeros(20, 30);
  }

}
