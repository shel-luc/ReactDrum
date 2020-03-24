import React from 'react';
import ReactDOM from 'react-dom';


class Box extends React.Component{
    constructor(props){
        super(props)
        this.audio = React.createRef();
        
        }

componentDidMount(){
    this.audio.current.addEventListener('ended',(e)=>{
        const parent = e.target.parentNode;
        parent.classList.remove('active')
    })
}


    playSound =() => {
   this.audio.current.play();
   const id = this.audio.current.id;
   const parent = this.audio.current.parentNode;
   parent.classList.add('active')
    const display= parent.parentNode;
    console.log(display);
    display.querySelector('h1').innerText = id;
    }

    render(){
        
        const {text, audio}= this.props;
        return(
            <div className="drum-pad" onClick={this.playSound} 
             id={text}>
                 {text}
        
        <audio ref={this.audio} src={audio} className="clip" id={text} />
    </div>
        )
    }
}

document.addEventListener('keydown', (e)=>{
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id)
        if (audio){
            const parent = audio.parentNode;
            parent.classList.add('active');
            audio.play();
        }
    }
)

export default Box;