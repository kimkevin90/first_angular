import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Jisub',
      'Jisubdesc',
      'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.jpg'
    ),
    new Recipe(
      'Jisub',
      'Jisubdesc',
      'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
