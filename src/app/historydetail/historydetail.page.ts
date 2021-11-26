import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseHistoryService } from '../purchase-history.service';
import { History } from '../history';


@Component({
  selector: 'app-historydetail',
  templateUrl: './historydetail.page.html',
  styleUrls: ['./historydetail.page.scss'],
})
export class HistorydetailPage implements OnInit {

  historyItem: History;
  
  constructor(
    private historyService : PurchaseHistoryService, 
    private activated_route: ActivatedRoute
    ) { }


  ngOnInit() {
    this.activated_route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('item_id')){
        return;
      }
     // this.service.getPhotoByID(id);
      this.historyItem = this.historyService.getItemById(paramMap.get('item_id'));
      console.log(this.historyItem)
    })
    
  }

}
