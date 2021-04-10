import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cards } from 'src/app/models/Cards';
import { WalletServiceService } from 'src/app/services/wallet-service.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  Cards!: Cards[];
  //@Output() deleteCards: EventEmitter<Cards> = new EventEmitter();
  search!:string;
  constructor(private WalletServiceService: WalletServiceService) { }

  ngOnInit() {
    this.WalletServiceService.getAllCards().subscribe(cards => {
      this.Cards = cards;
      });
  }

  onChange() {
    if (!Cards) {
      return [];
    }
    if (!this.search) {
      return Cards;
    }
    this.search = this.search.toLocaleLowerCase();

    return this.Cards.filter(it => {
      // return it.toLowerCase().includes(this.search);
      console.log("searching")
    });
  }
  
}
