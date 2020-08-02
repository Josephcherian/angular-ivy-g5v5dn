import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-search-inventory',
  templateUrl: './search-inventory.component.html',
  styleUrls: ['./search-inventory.component.css']
})
export class SearchInventoryComponent implements OnInit {
  public searchKey:String;
  public itemList:any;
  public showSearch:boolean;

  constructor(private invService:InventoryService) { }

  ngOnInit() {
    this.searchKey=null;
    this.itemList = null;
    this.showSearch = true;
  }

  search() {
    console.log(this.searchKey);
    this.showSearch = false;
    this.invService.searchItem(this.searchKey).subscribe((data) => {
      this.itemList = data;
      console.log(data);
      
    })

  }

  getImageUrl(productType) {
    if(productType === 'TTF' || productType === 'TLR' || productType === 'TL'  || productType === 'T') {
      return 'assets/tyre.jpg';
    } else if(productType === 'P') {
      return 'assets/parts.png';
    } else if (productType === 'L') {
      return 'assets/oil.jpg';
    }

  }
}
