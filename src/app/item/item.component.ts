import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item, items} from "../items";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
// First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('itemId'));

    // Find the product that correspond with the id provided in route.
    this.item = items.find(product => product.id === productIdFromRoute);
  }
}


