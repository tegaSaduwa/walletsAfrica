import { Component, OnInit,Input } from '@angular/core';
import { Cards } from 'src/app/models/Cards';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.css']
})
export class CardsTableComponent implements OnInit {
  @Input() Cards!: Cards;
  constructor(private walletServiceService: WalletServiceService) { }

  ngOnInit(): void {
  }

}
