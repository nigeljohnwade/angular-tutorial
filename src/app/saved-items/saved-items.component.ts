import { Component, OnInit } from '@angular/core';
import {SaveItemService} from "../save-item.service";

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {

  constructor(private savedItemService: SaveItemService ) { }

  savedItems = this.savedItemService.getSavedItems();

  ngOnInit(): void {
  }

}
