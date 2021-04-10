import { Component, OnInit, Input} from '@angular/core';
import { AllTransactions } from 'src/app/models/AllTransactions';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-trans-summary',
  templateUrl: './trans-summary.component.html',
  styleUrls: ['./trans-summary.component.css']
})
export class TransSummaryComponent implements OnInit {
  @Input()
  AllTransactions!: AllTransactions;


  constructor(private walletServiceService: WalletServiceService) { }

  ngOnInit(): void {
  }

}
