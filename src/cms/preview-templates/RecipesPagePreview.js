import React from 'react';
import PropTypes from 'prop-types';
import { RecipesPageTemplate } from '../../templates/recipes-page';

const RecipesPagePreview = ({ entry, widgetFor }) => (
  <RecipesPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
);

RecipesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default RecipesPagePreview;
