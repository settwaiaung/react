import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      data : ['Orange', 'Banana', 'Watermelon'],
    }

    this.input = React.createRef();
    this.add = this.add.bind(this);
  }

  add() {
    var data = this.state.data;
    var name = this.input.current.value;
    data.push(name);
    this.setState({
      data: data,
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {this.state.data.map(name => (
            <Item name={name} />
          ))}
        </ul>
        <input type="text" ref={this.input}/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default App;