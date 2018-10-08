import React from 'react';
import PropTypes from 'prop-types';
import { IngredientsPageTemplate } from '../../templates/ingredients-page';

const IngredientsPagePreview = ({ entry, widgetFor }) => (
  <IngredientsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

IngredientsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default IngredientsPagePreview;
