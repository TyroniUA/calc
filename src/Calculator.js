import React, { createRef } from 'react'
const endsWithOperator = /[*+-]$/;
const endsWithNegativeSign = /[*/+]-$/;

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formula:'',
            input: '0',
            previousValue: '',
        }
      
    }


    handleCLick = (event) => {
        if (this.state.input === '0') {
            //console.log('zero' + this.state.input)
            this.setState({
                formula: '' + event.target.value,
                input: '' + event.target.value
            })

        }
        
        else {
            console.log('HandleCLick else statement')
            this.setState({
                formula: this.state.formula + event.target.value,
                input: this.state.input + event.target.value
            })
        }
    }

    // handle operators + - / *
    handleOperator =(event)=> {
        //does it ends with operator
        if (!endsWithOperator.test(this.state.formula)) {
            console.log('Im testing')
            this.setState({
                previousValue: this.state.formula,
                formula: this.state.formula + event.target.value,
                input: event.target.value
            })
        }
        
        // does it ends with negative sign? 
        else if (!endsWithNegativeSign.test(this.state.formula)) {
            console.log('HandleOperator endsWithNegativeSign')
            this.setState({
                formula: (endsWithNegativeSign.test(this.state.formula + event.target.value) ? this.state.formula : this.state.previousValue) + event.target.value,
                })
        }
        
        // if input is not a minus => put it
        else if (event.target.value !=='-') {
            console.log('it also doing something')
            this.setState({
                formula: this.state.previousValue + event.target.value,
                input: event.target.value
            })

        }
    }
    
    addDecimal = (event) => {
        // only add decimal if there is no current decimal point present in the input area
        
        if (this.state.input.indexOf('.') === -1) {
          this.setState({ 
            formula: this.state.formula + event.target.value,  
            input: this.state.input + event.target.value });
        }
      };
    clear = () => {
        this.setState({
            input: '0',
            formula: '',
            previousValue: '',
            
        }
        )
            console.log(this.state.evaluated)
    }

    equals = () => {
       
        // the code that works without trying to solve Problem 13:
        let result = eval(this.state.formula.toString())
        


       this.setState({
           /*formula: this.state.formula + ' = ' + eval(this.state.formula.toString()),*/
           formula: result,
           input: result,
           previousValue: result,
        }
       )
       
    }
    render() {
        console.log(this.state.formula);
        return (
            <div><h1>Hi, I'm a calculator</h1>
            <div id='calculator'>
                <div id='formula'>{this.state.formula}</div>
                <div id='display'>{this.state.input}</div>
                {/*console.log(this.state.previousValue, this.state.input)*/}
                <div id='row' >
                    <button id='seven'onClick={this.handleCLick}>7</button>
                    <button id='eight'  onClick={this.handleCLick}>8</button>
                    <button id='nine'  onClick={this.handleCLick}>9</button>
                    <button id='divide'  onClick={this.handleOperator} value='/'>/</button>
                </div>
                <div id='row' >
                    <button id='four'  onClick={this.handleCLick}>4</button>
                    <button id='five'  onClick={this.handleCLick}>5</button>
                    <button id='six'  onClick={this.handleCLick}>6</button>
                    <button id='multiply'  onClick={this.handleOperator} value='*'>x</button>
                </div>
                <div id='row' ><button id='one' onClick={this.handleCLick}>1</button>
                    <button id='two' onClick={this.handleCLick}>2</button>
                    <button id='three' onClick={this.handleCLick}>3</button>
                    <button id='add'  onClick={this.handleOperator} value='+'>+</button>
                </div>
                <div id='row' >
                    <button id='decimal'  onClick={this.addDecimal} value='.'>.</button>
                    <button id='zero'  onClick={this.handleCLick}>0</button>
                    <button id='clear'  onClick={this.clear} value='AC' >AC</button>
                    <button id='subtract'  onClick={this.handleOperator} value='-'>-</button>
                    </div>
                    <button id='equals'  onClick={this.equals} value='='>=</button>
            </div>
            </div>
        )
    }
}

export default Calculator
