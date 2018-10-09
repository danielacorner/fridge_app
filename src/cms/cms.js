import CMS from 'netlify-cms';

import GroceryListPagePreview from './preview-templates/GroceryListPagePreview';
import RecipesPagePreview from './preview-templates/RecipesPagePreview';
import RecipePagePreview from './preview-templates/RecipePagePreview';

CMS.registerPreviewTemplate('grocery-list', GroceryListPagePreview);
CMS.registerPreviewTemplate('recipes', RecipesPagePreview);
CMS.registerPreviewTemplate('recipe', RecipePagePreview);
