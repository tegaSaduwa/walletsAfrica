import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AllTransactions } from 'src/app/models/AllTransactions';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  @Input()
  AllTransactions!: AllTransactions;

  constructor(private walletServiceService: WalletServiceService) { 
 
  }

  ngOnInit(): void {
  }

}
