import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import './style.css';

class App extends React.Component{

  state = {
    keys: ["Q", "W"," E", "A", "S", "D", "Z", "X", "C"]
  }


  render(){
    const {keys} = this.state;
    
  const sounds = [{
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}];

    return(
      <div id="Drum-Machine" className="container">
        <div id="Display" className="display">
          <h1>Play a sound</h1>
        {sounds.map((sound, id) =>(
          <Box text={sound.key} key={id} audio={sound.mp3} />
        ))}
        </div>
      </div>
    )
  }
}




ReactDOM.render(<App /> , document.getElementById('root'));
