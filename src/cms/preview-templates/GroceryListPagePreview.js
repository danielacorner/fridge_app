import React from 'react';
import PropTypes from 'prop-types';
import { GroceryListPageTemplate } from '../../templates/grocery-list-page';

const GroceryListPagePreview = ({ entry, widgetFor }) => (
  <GroceryListPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

GroceryListPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default GroceryListPagePreview;
