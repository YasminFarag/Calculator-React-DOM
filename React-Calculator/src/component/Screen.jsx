import React, { Component } from 'react';
import '../App.css';


export default class Screen extends Component {
   
    render() {
        let {result} = this.props
        return (
            <section className="calculator">
                <p 
                className="inpt" 
                type="text">
                    {result}</p>


                <div className="buttons">
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-orange" name="*">*</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-orange" name="/">/</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-orange" name="-">-</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-orange" name="+">+</button>
                    {/* grey buttons */}
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name=".">.</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="9">9</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="8">8</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="7">7</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="6">6</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="5">5</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="4">4</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="3">3</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="2">2</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="1">1</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey" name="0">0</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey btn-equal" name="=">=</button>
                    <button onClick={(e)=> this.props.onClick(e.target.name)} type="button" className="btn-grey btn-clear"name="C">C</button>
                </div>

            </section>
        )
    }
}
