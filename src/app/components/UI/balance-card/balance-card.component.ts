import { Component, Input, OnInit } from '@angular/core';
import { AllTransactions } from 'src/app/models/AllTransactions';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.css']
})
export class BalanceCardComponent implements OnInit {
  @Input()
  AllTransactions!: AllTransactions;

 

  constructor(private walletServiceService: WalletServiceService) { }

  ngOnInit(): void {
  }

 

}
