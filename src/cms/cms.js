import CMS from 'netlify-cms';

import GroceryListPagePreview from './preview-templates/GroceryListPagePreview';
import RecipePagePreview from './preview-templates/RecipePagePreview';

CMS.registerPreviewTemplate('grocery-list', GroceryListPagePreview);
CMS.registerPreviewTemplate('recipe', RecipePagePreview);
