import { Injectable } from '@angular/core';
import { History } from './history';
@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  historyList: History[];
  constructor() { }
  

  addHistoryItem(item) {
    if(this.historyList != undefined) {
      item.id = String(this.historyList.length);
      this.historyList.push(item);
    } else {
      this.historyList = [item];
      item.id = '0';
    }
    
    console.log(this.historyList);
  }
  getAllItems() {
    if(this.historyList != undefined) {
      return [...this.historyList];
    } 
  }
  getItemById(id) {
    return {...this.historyList.find(item => {return item.id === id;})};
  }

}
