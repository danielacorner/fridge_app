import React from 'react';
import PropTypes from 'prop-types';
import { ItemsPageTemplate } from '../../templates/items-page';

const ItemsPagePreview = ({ entry, widgetFor }) => (
  <ItemsPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
);

ItemsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ItemsPagePreview;
