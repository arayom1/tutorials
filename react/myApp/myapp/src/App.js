import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  state = {
    fields:{},
    name: "hello world"
  };

  onSubmit = fields => {
    this.setState({fields});
    alert("Thanks for signing up! ", fields);
    console.log("Thanks for signing up! We got: ", this.state);
  }; 
  

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        {this.state.name}
          
          {Object.keys(this.state.fields).forEach(key =>{
            return (<p> {key} - {this.state.fields[key] } </p>)
          } )
          }
        
      </div>
    );
  }
}

export default App;
