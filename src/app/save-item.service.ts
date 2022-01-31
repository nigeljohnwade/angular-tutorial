import { Injectable } from '@angular/core';
import {Item} from "./items";

@Injectable({
  providedIn: 'root'
})
export class SaveItemService {
  savedItems: Number[] = [];
  constructor() { }
  addSavedItem(itemId: Number){
    if(Boolean(this.savedItems.find(currentItem => currentItem === itemId))){
      alert('Already saved');
    }else{
      this.savedItems.push(itemId);
    }
  }
  removeSavedItem(itemId: Number) {
    this.savedItems = this.savedItems.filter(currentItem => itemId !== currentItem);
    return this.savedItems;
  }
  clearSavedItems(){
    this.savedItems = [];
    return this.savedItems;
  }
  getSavedItems(){
    return this.savedItems;
  }
  getSavedItem(itemId: number){
    return this.savedItems.find(currentItem => currentItem === itemId);
  }

}
