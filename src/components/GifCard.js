import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class GifCard extends Component{
//     constructor(props) {
//         super(props);
//     }

//     render(){
//         return(
//             <div>
//                 <img src= {this.props.gif}/>
//             </div>
//         );
//     }
// }

// }
function GifCard(props){
    return(
        <div>
            <img src= {props.gif.images.downsized.url}/>
        </div>
    )
}

export default GifCard;