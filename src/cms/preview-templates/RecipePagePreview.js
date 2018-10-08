import React from 'react';
import PropTypes from 'prop-types';
import { RecipePageTemplate } from '../../templates/recipe-page';

const RecipePagePreview = ({ entry, widgetFor }) => (
  <RecipePageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

RecipePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default RecipePagePreview;
