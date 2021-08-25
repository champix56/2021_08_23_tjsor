import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import {
  ACTIONS_CURRENT,
  ACTIONS_LISTS,
  initialRessourcesState,
  initialState,
  store,
} from "../../store/store";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const MemeForm = (props) => {
  console.log(props);
  const [images, setimages] = useState(initialRessourcesState.images);
  const [memes, setmemes] = useState(initialRessourcesState.memes);
  const [formData, setformData] = useState(initialState);
  useEffect(() => {
    setimages(store.getState().ressources.images);
    setmemes(store.getState().ressources.memes);
    setformData(store.getState().editor);
    store.subscribe(() => {
      setimages(store.getState().ressources.images);
      setmemes(store.getState().ressources.memes);
      setformData(store.getState().editor);
    });
   
  }, []);
  useEffect(() => {
    if (props.match.params.id) {
      store.dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: memes.find(e=>e.id===Number(props.match.params.id)),
      });
    }
  }, [memes]);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      {/* <ol>
        {images.map((e, i) => (
          <li key={`memeform-imglist-item-${i}`}>{e.filename}</li>
        ))}
      </ol>
      {JSON.stringify(formData)} */}
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          store.dispatch({ type: ACTIONS_CURRENT.SAVE_CURRENT });
        }}
      >
        {formData.id && <div>id : {formData.id}</div>}
        <input
          type="text"
          placeholder="text du meme"
          value={formData.text}
          onChange={(evt) => {
            store.dispatch({
              type: ACTIONS_CURRENT.UPDATE_CURRENT,
              value: { ...formData, text: evt.target.value },
            });
          }}
        />
        <br />
        image
        <br />
        <select
          value={formData.imageId === null ? -1 : formData.imageId}
          onChange={(evt) => {
            store.dispatch({
              type: ACTIONS_CURRENT.UPDATE_CURRENT,
              value: {
                ...formData,
                imageId:
                  evt.target.value !== "-1" ? Number(evt.target.value) : null,
              },
            });
          }}
        >
          <option value="-1">Pas d'image</option>
          {images.map((e, i) => (
            <option key={"list-img-" + i} value={e.id}>
              {e.titre}
            </option>
          ))}
        </select>
        <br />
        position
        <div className="flex-col">
          x:
          <input
            type="number"
            className={styles.shortInput}
            value={formData.x}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, x: Number(evt.target.value) },
              });
            }}
          />
          / y:
          <input
            type="number"
            className={styles.shortInput}
            value={formData.y}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, y: Number(evt.target.value) },
              });
            }}
          />
        </div>
        <div className="flex-col">
          underline :
          <input
            type="checkbox"
            className={styles.shortInput}
            checked={formData.underline ? "checked" : ""}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, underline: evt.target.checked },
              });
            }}
          />
          <input
            type="checkbox"
            className={styles.shortInput}
            checked={formData.italic ? "checked" : ""}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, italic: evt.target.checked },
              });
            }}
          />
          italic
        </div>
        <div className="flex-col">
          font-size:
          <input
            type="number"
            className={styles.shortInput}
            value={formData.fontSize}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, fontSize: Number(evt.target.value) },
              });
            }}
          />
          / font-weight:
          <input
            type="number"
            min="100"
            max="900"
            step="100"
            className={styles.shortInput}
            value={formData.fontWeight}
            onChange={(evt) => {
              store.dispatch({
                type: ACTIONS_CURRENT.UPDATE_CURRENT,
                value: { ...formData, fontWeight: evt.target.value },
              });
            }}
          />
        </div>
        <hr />
        Color
        <br />
        <input
          type="color"
          className={styles.largeInput}
          value={formData.color}
          onChange={(evt) => {
            store.dispatch({
              type: ACTIONS_CURRENT.UPDATE_CURRENT,
              value: { ...formData, color: evt.target.value },
            });
          }}
        />
        <br />
        <br />
        <input type="reset" value="reset" />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default withRouter(MemeForm);
