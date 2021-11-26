import { Component, OnInit } from '@angular/core';
import { PurchaseHistoryService } from '../purchase-history.service';
import { History } from '../history';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.page.html',
  styleUrls: ['./sale-history.page.scss'],
})
export class SaleHistoryPage implements OnInit {

  listItems : History[];
  constructor(private historyService: PurchaseHistoryService) { }


  ngOnInit() {
  
    let temp = this.historyService.getAllItems();
    if(temp != undefined) {
      this.listItems = temp;  
    } 
  }

}
