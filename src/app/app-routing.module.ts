import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'cards', component: CardsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
