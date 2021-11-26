import { Injectable } from '@angular/core';
import { Item } from './Item';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private stockItems : Item[] = [{
    id: '0',
    name: 'Shoes',
    price: 79.99,
    stock: 5
  },
  {
    id: '1',
    name: 'Pants',
    price: 49.99,
    stock: 10
  },
  {
    id: '2',
    name: 'Shirt',
    price: 29.99,
    stock: 22
  },
  {
    id: '3',
    name: 'Glasses',
    price: 249.99,
    stock: 3
  }

];



  constructor() { }

  getAllItems() {
    return [...this.stockItems];
  }
  getItemById(id) {
    return {...this.stockItems.find(item => {return item.id === id;})};
  }
  updateItem(updatedItem) {
    let oldItem = this.stockItems.find(item => {return item.id === updatedItem.id;})
    let indexItem = this.stockItems.indexOf(oldItem);
    this.stockItems[indexItem] = updatedItem; 
  }

  // showUpdatedItem(newItem) {
    

  //   let updateItem = this.itemArray.items.find(this.findIndexToUpdate, newItem.id);
    


  //   this.itemArray.items[index] = newItem;

  // }

  // findIndexToUpdate(newItem) { 
  //       return newItem.id === this;
  // }

}
