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
            result: (eval(this.state.result) || "" ) + ""
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

  onClick = (button) => {
        if (button === 'C') {
          this.reset()
        } else if (button === '=') {
          this.calculate()
        } else {
          this.setState({
            result: this.state.result + button
          })
        }
  }
      render() {
        return ( <div >
          <Screen 
          onClick={this.onClick}
          result ={this.state.result} 
          
          / >
          </div>
        )
      }
    }