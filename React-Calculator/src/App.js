import React, {
  Component
} from 'react';
import './App.css';
import Screen from './component/Screen';

export default class App extends Component {
  state = {

    result: '',
  }

  calculate = () => {

    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: 'Error',
      })
    }


  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });

  }

  onClick = (button) => {
    if (button === 'C') {
      this.reset()
    } else if (button === '=') {
      this.calculate()
    } else if (button === 'CE') {
      this.backSpace()

    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  handleKeyPress =(e) => {
    if(e.key === 'Enter'){
      this.reset()
    
      
    }

  }
  render() {
    return (
       <div>
      
      <Screen onClick = {
        this.onClick
      }
      result = {
        this.state.result
      } 
      onKeyPress={this.handleKeyPress} /> 
      </div >
    )
  }
}