import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ItemsService } from '../items.service';
import { Item } from '../item';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  form : FormGroup
  currItem : Item


  listItems : Item[];
  constructor(private itemService: ItemsService, private alertController : AlertController) { }
  ionViewDidEnter(){
    this.listItems = this.itemService.getAllItems();
  }

  ngOnInit() {
    this.listItems = this.itemService.getAllItems();

    this.form = new FormGroup({
      amount : new FormControl(null, {
        updateOn :'change',
        validators: [Validators.maxLength(200), Validators.minLength(1)]
      })
    })

  }

  setCurrent(id) {
    this.currItem = this.itemService.getItemById(id);
  }
  onSubmitForm(){
    console.log(this.form);
    
    if(this.currItem == undefined) {
      this.presentAlert('Must select item to restock');
      return;
    }
    if (this.form.invalid){
      console.log('invalid')
     this.presentAlert('Error!! all values are needes');
    } else {
      console.log(this.form.get('amount').value);
      this.currItem.stock = this.form.get('amount').value;
      this.itemService.updateItem(this.currItem);
      this.listItems = this.itemService.getAllItems();

      this.currItem = null;
      //this.presentAlert('Have a nice trip to ' + this.form.get('destination').value );
      this.presentAlert('Restock succesful');      
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
