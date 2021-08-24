import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

const MemeViewer = () => (
  <div className={styles.MemeViewer} data-testid="MemeViewer">
    MemeViewer Component
  </div>
);

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
