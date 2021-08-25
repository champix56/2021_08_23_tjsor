import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexViewer.module.css";

const FlexViewer = (props) => {
  console.log(props);
  return (
    <div className={styles.FlexViewer} data-testid="FlexViewer">
      {props.children}
    </div>
  );
};

FlexViewer.propTypes = {
    children:PropTypes.array.isRequired,
};

FlexViewer.defaultProps = {};

export default FlexViewer;
