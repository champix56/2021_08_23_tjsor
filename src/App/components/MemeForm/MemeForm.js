import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = ({images, titre}) => (
  <div className={styles.MemeForm} data-testid="MemeForm">
    <ol>
    {images.map((e,i)=><li>{e.filename}</li>)}
    </ol>
  </div>
);

MemeForm.propTypes = {
  images:PropTypes.array,
};

MemeForm.defaultProps = {
  images:[]
};

export default MemeForm;
