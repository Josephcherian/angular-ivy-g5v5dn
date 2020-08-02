import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { BillItem } from 'src/app/models/billitem';

@Component({
  selector: 'app-bill-management',
  templateUrl: './bill-management.component.html',
  styleUrls: ['./bill-management.component.css']
})
export class BillManagementComponent implements OnInit {
  public itemList:any;
  public selectedItem:any;
  public billitems: any[];
  
  constructor(private router:Router,private invService:InventoryService) { }

  ngOnInit() {
    this.invService.listAllItem().subscribe((data) => {
      this.itemList = data;
      this.selectedItem =  this.itemList[0];
      this.billitems = [];
      console.log(data);
      
    })

  }

  openNewBill() {
    this.router.navigateByUrl('/generatebill');
  }

  onChangeProduct(e,index){
    console.log(e.target.value);
    let item = this.itemList.filter(x => x.productDescription === e.target.value);
    console.log(item[0]);
    var bilitem  = new BillItem(null);
    bilitem.id = index;
    bilitem.productDescription = item[0].productDescription;
    bilitem.productType = item[0].productType;
    this.billitems.push(bilitem);
  }

  addBillItem() {
    
    var billrow = new BillItem(null);
    this.billitems.push(billrow);
  }
  
}
