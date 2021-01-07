import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// action
import { Remove } from 'src/app/shared/models/actions/types.action';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart$: Observable<string[]>;

  dataCart: any; 

  _amount = new Array(101);
  
  constructor(
    private store: Store<{ cart: string[] }>,
  ) { 
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);
  }

  ngOnInit(): void {
  }

  async Remove(product: any) {
    this.store.dispatch(Remove(product));
  }
}
