import { combineReducers, createStore } from "redux";
import * as CONFIG from "../config/config";

export const initialRessourcesState = {
  memes: [],
  images: [],
};
export const ACTIONS_LISTS = Object.freeze({
  REPLACE_IMAGES: "REPLACE_IMAGES",
  REPLACE_MEMES: "REPLACE_MEMES",
  ADD_MEME: "ADD_MEME",
  UPDATE_MEME: "UPDATE_MEME",
  SELECT_MEME: "SELECT_MEME",
});
function ressourcesReducer(state = initialRessourcesState, action) {
  const type = action.type.includes("@@redux/PROBE_UNKNOWN_ACTION")
    ? "INIT"
    : action.type;
  switch (type) {
    case "INIT":
      fetch(`${CONFIG.REST_SRV}${CONFIG.RESSOURCES.images}`)
        .then((f) => f.json())
        .then((o) => {
          store.dispatch({ type: ACTIONS_LISTS.REPLACE_IMAGES, values: o });
        });
      fetch(`${CONFIG.REST_SRV}${CONFIG.RESSOURCES.memes}`)
        .then((f) => f.json())
        .then((o) => {
          store.dispatch({ type: ACTIONS_LISTS.REPLACE_MEMES, values: o });
        });
      return state;
      // case ACTIONS_LISTS.SELECT_MEME:
      // store.dispatch({
      //   type: ACTIONS_CURRENT.UPDATE_CURRENT,
      //   value: state.memes.find((e) => e.id === action.value),
      // });
      // return state;
    case ACTIONS_LISTS.REPLACE_IMAGES:
      return { ...state, images: action.values };
    case ACTIONS_LISTS.REPLACE_MEMES:
      return { ...state, memes: action.values };
    case ACTIONS_LISTS.ADD_MEME:
      const position = state.memes.findIndex((e) => e.id === action.value.id);
      if (position === -1) {
        return { ...state, memes: [...state.memes, action.value] };
      } else {
        return {
          ...state,
          memes: [
            ...state.memes.slice(0, position),
            action.value,
            ...state.memes.slice(position),
          ],
        };
      }
    
    // return { ...state, memes: action.values };
    default:
      return state;
  }
}

export const initialState = {
  text: "",
  x: 0,
  y: 0,
  imageId: null,
  fontSize: 20,
  underline: false,
  italic: false,
  fontWeight: 500,
};
export const ACTIONS_CURRENT = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT",
});
const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...action.value };
    case ACTIONS_CURRENT.RESET_CURRENT:
      return { ...initialState };
    case ACTIONS_CURRENT.SAVE_CURRENT:
      fetch(
        `${CONFIG.REST_SRV}${CONFIG.RESSOURCES.memes}${
          state.id ? "/" + state.id : ""
        }`,
        {
          method: state.id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      )
        .then((f) => f.json())
        .then((o) => {
          store.dispatch({ type: ACTIONS_CURRENT.UPDATE_CURRENT, value: o });
          store.dispatch({ type: ACTIONS_LISTS.ADD_MEME, value: o });
        });
      return state;
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({ editor: currentReducer, ressources: ressourcesReducer })
);
store.subscribe(() => {
  console.log(store.getState());
});
/*store.dispatch({type:'REPLACE_IMAGES',values:[{id:123},{id:254}]}); 
store.dispatch({type:'REPLACE_IMAGES',values:[{id:25},{id:32}]}); 
store.dispatch({type:'REPLACE_IMAGES',values:[{id:13},{id:541}]}); 
*/
