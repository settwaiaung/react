import React from 'react';

class Item extends React.Component {
  render() {
    return (
    <li>{this.props.name}</li>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : ['Alex', 'Bob', 'John'],
    }
    this.input = React.createRef();
  }
  
  add = () => {
    this.setState({
      data: [...this.state.data, this.input.current.value],
    })
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>USER NAME: KYAW GYI</p>
        <ul>
          {this.state.data.map( i => {
            return (<Item name={i}/>)
          })}
        </ul>
        <input type="text" ref={this.input}/><button onClick={this.add}>+</button>
      </div> 
    )
  }
}

export default App;