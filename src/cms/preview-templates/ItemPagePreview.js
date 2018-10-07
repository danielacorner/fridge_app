import React from 'react';
import PropTypes from 'prop-types';
import { ItemPageTemplate } from '../../templates/item-page';

const ItemPagePreview = ({ entry, widgetFor }) => (
  <ItemPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ItemPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ItemPagePreview;
