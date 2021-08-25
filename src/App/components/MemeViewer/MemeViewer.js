import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.css";

const MemeViewer = (props) => {
  return (
    <div className={styles.MemeViewer} data-testid="MemeViewer">
      <svg
        viewBox={
          props.image ? `0 0 ${props.image.w} ${props.image.h}` : "0 0 1000 500"
        }
      >
        {props.image && (
          <image href={"/img/" + props.image.filename} x="0" y="0" />
        )}
        <text
          x={props.meme.x}
          y={props.meme.y}
          fill={props.meme.color}
          fontSize={props.meme.fontSize}
          fontWeight={props.meme.fontWeight}
          textDecoration={props.meme.underline ? "underline" : "normal"}
          fontStyle={props.meme.italic ? "italic" : "normal"}
        >
          {props.meme.text}
        </text>
      </svg>
    </div>
  );
};

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
