import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={styles.Button+(props.shadow?' '+styles.shadow:'')}
      style={{backgroundColor: props.bgColor, color: props.color,...props.style }}
      onClick={(evt) => {
        props.clickEvent("button " + props.text + " clicked");
      }}
    >
      {props.text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  shadow: PropTypes.bool.isRequired,
  style:PropTypes.object,
};
Button.defaultProps = {
  bgColor: "greenyellow",
  color: "#FFFF",
  shadow: true,
};

export default Button;
