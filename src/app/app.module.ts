import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { MainComponent } from './components/layouts/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalanceCardComponent } from './components/UI/balance-card/balance-card.component';
import { TransSummaryComponent } from './components/UI/trans-summary/trans-summary.component';
import { DashboardTableComponent } from './components/UI/dashboard-table/dashboard-table.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardsTableComponent } from './components/UI/cards-table/cards-table.component';
import { ModalComponent } from './components/UI/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    DashboardComponent,
    BalanceCardComponent,
    TransSummaryComponent,
    DashboardTableComponent,
    CardsComponent,
    CardsTableComponent,
    ModalComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
