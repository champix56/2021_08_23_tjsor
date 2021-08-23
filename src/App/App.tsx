import React from 'react';

import Button from './components/ui/Button/Button'
import './App.css';

function App(props) {
  console.log(props);

  return (
    <>
      <div className="App">Demat breizh</div>
      <div>
        
        <Button
          bgColor="skyblue"
          text="OK"
          clickEvent={(arg) => {
            console.log(arg);
          }}
          style={{textDecoration:'underline',backgroundColor:'teal' }}
          />
        <Button
          bgColor="tomato"
          text="OK"
          shadow={false}
          clickEvent={(arg) => {
            console.log(arg);
          }} />
        <Button
          text="OK"
          clickEvent={(arg) => {
            console.log(arg);
          }} />
          <hr/>
          <But text="zert" clickEvent={()=>{}}  />
      </div>
    </>
  );
}

export default App;
