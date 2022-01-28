import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SaveItemService} from "../save-item.service";
import {Item, items} from "../items";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private savedItemService: SaveItemService
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
    this.item = items.find(item => item.id === itemIdFromRoute);
  }

  saveForLater(item: Item){
    this.savedItemService.addSavedItem(item);
  }
}


