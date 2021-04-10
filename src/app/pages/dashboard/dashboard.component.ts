import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AllTransactions } from 'src/app/models/AllTransactions';
import { WalletServiceService } from '../../services/wallet-service.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="welcome-popup container my-4 mx-2">
      <h6 class="welcome-popup-header">
        🙌🏽
        <br />
        <br />
        Welcome to Wallets Business
        <br />
        <br />
      </h6>
      <hr />
      <div class="welcome-popup-body">
        <p>Hello,</p>

        <p>
          Thanks so much for signing up. We know how difficult it can be to set
          up a corporate account for your business and that why we’ve made it
          really easy for you to get started with as little requirements as
          possible.
        </p>

        <p>
          Your Wallets Business account allows you to carry out most of your
          banking transactions right off the bat. You can also carry out bulk
          transactions very quickly. Cards are definitely something you want to
          try out especially for your cash and online expenses.
        </p>

        <p>
          I’ll leave you now to go ahead and start exploring. If you run into
          any issues or need to clarify anything, please send me an email at
          john@wallets.africa or hit me up on Twitter @thejohnoke.
        </p>

        <p>Thanks!</p>
        <p>John Oke, CEO, Wallets Africa</p>

        <button class="btn btn-sm welcome-popup-btn" (click)="activeModal.close('Close click')">
          Show me something awesome
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css'],
})
export class NgbdModalContent {
  // @Input name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('content', { static: true }) content!: TemplateRef<any>;

  AllTransactions!: AllTransactions[];

  constructor(
    private WalletServiceService: WalletServiceService,
    private modalService: NgbModal
  ) {
    //this.AllTransactions = [];
  }

  ngOnInit() {
    this.WalletServiceService.getAllTransactions().subscribe((allTrans) => {
      this.AllTransactions = allTrans;
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
    });
  }
}
