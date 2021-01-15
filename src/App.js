import React, {Component} from 'react';
import Layout from './Layout';
import Styled from 'styled-components';
import './App.css';

class App extends Component {
  state = {
    rows: 0,
    rowDetails:[],
    typingTimeout: 0,
    layoutFlag: true
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
          if (input.length === 0) {
            this.setState({rows: 0,layoutFlag:true});
          }
          else{
            //Validating input
            let valid = input.replaceAll(/([0-9]|\/|\s)/g,"");
            if (valid.length === 0) {
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
                               rowDetails: details,
                               layoutFlag: true})
              }
            else {
              this.setState({layoutFlag: false});
            }
            }
    }
   
    render() {
    let ErrorStyle   = Styled.h2`color: #fc2403;`
    let generateLayout = null;
    if (this.state.layoutFlag) {
      generateLayout = <Layout rows={this.state.rows} rowDetails={this.state.rowDetails}/>;
    }
    else {
      generateLayout = <ErrorStyle>Your input is invalid. Enter dimensions in the for of "n / n / n / ..."</ErrorStyle>
    }
    return (
      <div className="main-div">
        <h1>Enter your layout dimensions to generate:</h1>
        <input type="text" onChange={this.handleChange}/>
        {generateLayout}
      </div>
    )
  }
}
export default App;
