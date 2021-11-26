import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { PurchaseHistoryService } from '../purchase-history.service';
import { Item } from '../item';
import { History } from '../history';
import { ThrowStmt } from '@angular/compiler';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listItems : Item[];
  buyAmount: string = "";
  activeItem: Item;
  totalAmount: number = 0;





  constructor(private itemService: ItemsService,
     private historyService: PurchaseHistoryService,
     private alertController : AlertController) {

  }

  ionViewWillEnter(){
    console.log("View will enter")
  }
  ionViewDidEnter(){
    this.listItems = this.itemService.getAllItems();
  }
  ionViewDidLeave(){
    console.log("View did leave")
  }
  ionViewWillLeave(){
    console.log("View will leave")
  }
  ngOnInit(){
      this.listItems = this.itemService.getAllItems();
  }

  createHistory() {

    let myDate = new Date().toISOString();
    let hItem : History = {
      id: "0",
      name: this.activeItem.name, 
      amount: this.buyAmount, 
      date: myDate,
      price: String(this.totalAmount)
    };
    this.historyService.addHistoryItem(hItem);
    
  }

  addTotal(num) {

    if(this.activeItem == undefined) {
      this.presentAlert("Select Item To Purchase");
      return;
    }

    console.log(typeof(num));
    this.buyAmount = this.buyAmount + num;  
    
    let num2 = Number(this.buyAmount) * this.activeItem.price; 
    
    this.totalAmount = Number(num2.toFixed(2)); 
  }
  setCurrentItem(id) {
    this.activeItem = this.itemService.getItemById(id);

    console.log(this.activeItem)
    this.buyAmount = "";
  }

  purchaseItem() {

    if(this.activeItem == undefined) {
      this.presentAlert("Select Item To Purchase");
      return;
    }

    let numAmount = Number(this.buyAmount);
    if(numAmount <= this.activeItem.stock) {

      this.activeItem.stock = this.activeItem.stock - numAmount; 
      this.itemService.updateItem(this.activeItem);
      this.listItems = this.itemService.getAllItems();
      
      this.presentAlert(this.activeItem.name + " Purchased");
      this.createHistory();
      this.buyAmount = "";
      this.activeItem = null;
      this.totalAmount = 0;

      
    } else {
      this.presentAlert("Not enough stock to purchase");
      this.buyAmount = "";
      this.totalAmount = 0;
    
    }
    
  }

  async presentAlert(msg:string) {
    const alert = await this.alertController.create({
       message: msg,
       buttons: [{
       text:'Close'
     }]
     })
     await alert.present();
 
  }

}
