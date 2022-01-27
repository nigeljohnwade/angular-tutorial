import {Component, OnInit} from '@angular/core';

import {items} from '../items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() {
  }

  items = items;

  ngOnInit(): void {
  }

}
