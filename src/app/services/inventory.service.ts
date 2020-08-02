import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor( private httpClient:HttpClient) { }

  addItem(data:any) {
    let url = "http://localhost:5050/inventory";
    return this.httpClient.post(url, data);
  }

  listItem(data:any) {
    let url = "http://localhost:5050/inventory/" + data;
    return this.httpClient.get(url);
  }

  updateItem(data:any) {
    let url = "http://localhost:5050/inventory/";
    return this.httpClient.put(url,data);
  }

  deleteItem(data:any) {
    let url = "http://localhost:5050/inventory/" + data;
    return this.httpClient.delete(url);
  }

  searchItem(data:any) {
    let url = "http://localhost:5050/inventory/search/" + data;
    return this.httpClient.get(url);
  }

  listAllItem() {
    let url = "http://localhost:5050/inventory/";
    return this.httpClient.get(url);
  }
}
