import React, {Component} from 'react';
import Layout from './Layout';
import './App.css';

class App extends Component {
  state = {
    rows: 0,
    rowDetails:[],
    typingTimeout: 2500
  }
  
  handleChange = (event) => {
      //Resetting the timer after each input
      if(this.state.typingTimeout) {
        clearTimeout(this.state.typingTimeout);
      }
      let input = event.target.value;
      this.setState({typingTimeout: setTimeout(() => this.parseInput(input), 750)});
    }

    parseInput = (input) => {
          if (input.length !== 0) {
            //Converting input sting to a number array 
            let layout = input.split(" / ");
            layout.forEach(element => {parseInt(element)})
            
            //Immutable copies of the state
            let newState = {...this.state};
            newState.rows = layout.length;
            
            let details = [...newState.rowDetails];
            
            //Updating the state
            for (var i = 0; i < newState.rows; i++) {
              details[i] = {columns: layout[i]}
            }
            this.setState({rows: newState.rows,
                           rowDetails: details})
          }
    }
   
  render() {
    let layoutFlag = true;
    let generateLayout = null;
    if (layoutFlag) {
      generateLayout = <Layout rows={this.state.rows} rowDetails={this.state.rowDetails}/>;
    }
    return (
      <div className="main-div">
        <h1>Enter your layout dimensions to generate:</h1>
        <input type="text" onChange={this.handleChange} />
        {generateLayout}
      </div>
    )
  }
}
export default App;
