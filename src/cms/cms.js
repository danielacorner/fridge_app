import CMS from 'netlify-cms';

import IngredientsPagePreview from './preview-templates/IngredientsPagePreview';
import IngredientPagePreview from './preview-templates/IngredientPagePreview';
import RecipesPagePreview from './preview-templates/RecipesPagePreview';
import RecipePagePreview from './preview-templates/RecipePagePreview';

CMS.registerPreviewTemplate('ingredients', IngredientsPagePreview);
CMS.registerPreviewTemplate('ingredient', IngredientPagePreview);
CMS.registerPreviewTemplate('recipes', RecipesPagePreview);
CMS.registerPreviewTemplate('recipe', RecipePagePreview);
