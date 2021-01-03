import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingItemAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(name : string, amount: number){

    this.shoppingItemAdded.emit(new Ingredient(name, amount));

  }

}
