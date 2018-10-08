import React from 'react';
import PropTypes from 'prop-types';
import { IngredientPageTemplate } from '../../templates/ingredient-page';

const IngredientPagePreview = ({ entry, widgetFor }) => (
  <IngredientPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

IngredientPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IngredientPagePreview;
