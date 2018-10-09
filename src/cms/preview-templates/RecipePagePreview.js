import React from 'react';
import PropTypes from 'prop-types';
import { RecipePageTemplate } from '../../templates/recipe-page';

const RecipePagePreview = ({ entry, widgetFor }) => (
  <RecipePageTemplate
    title={entry.getIn(['data', 'title'])}
    serves={entry.getIn(['data', 'serves'])}
    ingredients={entry.getIn(['data', 'ingredients'])}
    minutes={entry.getIn(['data', 'minutes'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
  />
);

RecipePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default RecipePagePreview;
