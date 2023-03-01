import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is a Test Recipe',
      'https://cdn.apartmenttherapy.info/image/fetch/t_sailthru_email_square/https://s3.amazonaws.com/pixtruder/original_images/f5cffedb779ce8ea3991f8020b5616d39ef6c0ee'
    ),
    new Recipe(
      'Recipe 1',
      'This is a Test Recipe',
      'https://cdn.apartmenttherapy.info/image/fetch/t_sailthru_email_square/https://s3.amazonaws.com/pixtruder/original_images/f5cffedb779ce8ea3991f8020b5616d39ef6c0ee'
    ),
    new Recipe(
      'Recipe 1',
      'This is a Test Recipe',
      'https://cdn.apartmenttherapy.info/image/fetch/t_sailthru_email_square/https://s3.amazonaws.com/pixtruder/original_images/f5cffedb779ce8ea3991f8020b5616d39ef6c0ee'
    ),
  ];
}
