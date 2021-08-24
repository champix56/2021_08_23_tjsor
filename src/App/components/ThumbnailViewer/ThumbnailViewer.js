import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailViewer.module.css';

const ThumbnailViewer = () => (
  <div className={styles.ThumbnailViewer} data-testid="ThumbnailViewer">
    ThumbnailViewer Component
  </div>
);

ThumbnailViewer.propTypes = {};

ThumbnailViewer.defaultProps = {};

export default ThumbnailViewer;
