import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ItemService} from "../item.service";
import {Item, items} from "../items";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: Item | undefined;

  editItemForm = new FormGroup({
    id: new FormControl,
    name: new FormControl(''),
    description: new FormControl(''),
    longDescription: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
    this.item = items.find(item => item.id === itemIdFromRoute);
    this.editItemForm.patchValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
      longDescription: this.item.longDescription,
    });
  }

  onSubmit() {
    this.itemService.replaceItem({
      ...this.editItemForm.value
    });
  }
}
