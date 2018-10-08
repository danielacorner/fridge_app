import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import RecipesPagePreview from './preview-templates/RecipesPagePreview';
import RecipePagePreview from './preview-templates/RecipePagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('recipes', RecipesPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('recipe', RecipePagePreview);
