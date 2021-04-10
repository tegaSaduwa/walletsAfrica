import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllTransactions } from "../models/AllTransactions"
import {  Observable } from 'rxjs';
import { Cards } from '../models/Cards';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class WalletServiceService {
  TransUrl:string = 'http://localhost:5555/allTransactions'
  CardsUrl:String =' http://localhost:3000/cards'

  constructor(private http:HttpClient) { }

  getAllTransactions():Observable<AllTransactions[]> {

    return this.http.get<AllTransactions[]>(`${this.TransUrl}`);
   }


   getAllCards():Observable<Cards[]> {

    return this.http.get<Cards[]>(`${this.CardsUrl}`);
   }
  // sum: number = AllTransactions.map(a => a.amount).reduce(function(a, b)
  //  {
  //    return a + b;
  //  });
   
   
}
