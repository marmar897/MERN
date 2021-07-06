import React, { Component } from 'react';
import GifCard from './GifCard';
const apiKey = '7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';


class SearchField extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            gifs:[] ,
            found: false,
        }
    }
    handleFormChanges = () => {
        let val = document.getElementById('submitId').value;
        // this.setState(val}); 
        fetch('http://api.giphy.com/v1/gifs/search?q=' + val + '&api_key=' + apiKey )
    
          .then(response => response.json())
          .then(data => {
            //console.log(data)
            this.setState({gifs:data.data, found: true})
             console.log(this.state.gifs);
            //console.log("SETSTATE DONE")
          })
    
          .catch(error => {
            this.setState({ found: false })
            console.log("error: ")
          });
      }

    render(){
        let foundcards = [];
        if (this.state.found) {
          foundcards = this.state.gifs.map((i) => <GifCard gif={i}/>)
         console.log("its been found")
        } else {
          foundcards = <h2> no found results</h2>
        }

        return(
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Search for gifs!" />
            <button onClick= {this.handleFormChanges}> Search </button>
            {foundcards}

            </div>
        );
    }

}

export default SearchField;