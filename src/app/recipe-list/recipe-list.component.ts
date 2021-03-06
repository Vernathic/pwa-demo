import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public items: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.items = this.recipeService.getRecipes();
  }

}
