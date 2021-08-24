import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexViewer.module.css';

const FlexViewer = () => (
  <div className={styles.FlexViewer} data-testid="FlexViewer">
    FlexViewer Component
  </div>
);

FlexViewer.propTypes = {};

FlexViewer.defaultProps = {};

export default FlexViewer;
