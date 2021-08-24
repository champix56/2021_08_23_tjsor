import React from 'react';
import styles from './App.module.css'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar/NavBar';
import MemeForm from './components/MemeForm/MemeForm';
import * as CONFIG from './config/config'
class App extends React.Component{
    localCounter=0;
    constructor(props)
    {
        super(props);
        this.state={currentMeme:{text:"",x:0,y:0,imageId:undefined},images:[]};

    }
    componentDidMount(){
       fetch(`${CONFIG.REST_SRV}${CONFIG.RESSOURCES.images}`)
        .then(f=>f.json())
        .then(o=>this.setState({images:o}))
    }
    componentDidUpdate(change,prev){
        //console.log(this.state, "previous val", prev);

    }
    render(){
        return <div className={styles.App}>
            <NavBar/>
            <MemeForm images={this.state.images} />
            <hr/>
                {JSON.stringify(this.state)}
                {/* {CONFIG.default}{JSON.stringify(CONFIG.RESSOURCES)} */}
                <ul>
                    {/* {
                        this.state.images.map((e,i)=>{
                            return <li>une image</li>
                        })
                    } */}
                </ul>
        </div>
    }
}
 
export default App;