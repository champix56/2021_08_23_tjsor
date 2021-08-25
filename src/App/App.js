import React from "react";
import styles from "./App.module.css";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar/NavBar";
import MemeForm from "./components/MemeForm/MemeForm";
import { initialRessourcesState, initialState, store } from "./store/store";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import FlexViewer from "./components/FlexViewer/FlexViewer";
import ThumbnailViewer from "./components/ThumbnailViewer/ThumbnailViewer";
import { Switch, Route, Link } from "react-router-dom";
import Button from "./components/ui/Button/Button";

class App extends React.Component {
  localCounter = 0;
  constructor(props) {
    super(props);
    this.state = { currentMeme: initialState, ...initialRessourcesState };
  }
  componentDidMount() {
    this.setState({
      currentMeme: store.getState().editor,
      images: store.getState().ressources.images,
      memes: store.getState().ressources.memes,
    });
    store.subscribe(() => {
      this.setState({
        ...store.getState().ressources,
        currentMeme: store.getState().editor,
      });
    });
  }
  componentDidUpdate(change, prev) {
    //console.log(this.state, "previous val", prev);
  }
  render() {
    return (
      <div className={styles.App}>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <h1>Demat les breizhouz et degemer mat sur meme generator</h1>
          </Route>
          <Route path="/thumbnail">
            <ThumbnailViewer>
              {this.state.memes.map((meme, i) => (
                <Link to={"/editor/" + meme.id}>
                  <MemeViewer
                    key={"thumb-meme-" + i}
                    meme={meme}
                    image={this.state.images.find(
                      (eimg) => eimg.id === meme.imageId
                    )}
                  />
                </Link>
              ))}
            </ThumbnailViewer>
          </Route>
          <Route path="/editor/:id">
          <FlexViewer>
              <MemeViewer
                meme={this.state.currentMeme}
                image={this.state.images.find(
                  (e) => e.id === this.state.currentMeme.imageId
                )}
              />
              <MemeForm images={this.state.images} />
            </FlexViewer>      
          </Route>
          <Route path="/editor">
            <FlexViewer>
              <MemeViewer
                meme={this.state.currentMeme}
                image={this.state.images.find(
                  (e) => e.id === this.state.currentMeme.imageId
                )}
              />
              <MemeForm images={this.state.images} />
            </FlexViewer>
          </Route>
          <Route path="/">
            <h2>ERROR 404: PAGE NOT FOUND !!!!!</h2>
            <Link to="/">
              <Button clickEvent={() => {}} text="Retour page accueil" />
            </Link>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
