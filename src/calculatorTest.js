import React, { createRef } from 'react'
const endsWithOperator = /[*+‑]$/;
const endsWithNegativeSign = /[x/+]‑$/;

class CalculatorTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formula:'',
            input: '0',
            previousValue: '',
        }
        this.handleCLick = this.handleCLick.bind(this);
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
    handleOperator =(event)=> {
        console.log(event.target.value)
        if (!endsWithOperator.test(this.state.formula)) {
            console.log('Im testing')
            this.setState({
                previousValue: this.state.formula,
                formula: this.state.formula + event.target.value,
                input: ''
            })
            console.log(this.state.formula);
        }
        
        else if (!endsWithNegativeSign.test(this.state.formula)) {
            console.log('HandleOperator endsWithNegativeSign')
            this.setState({
                formula: (endsWithNegativeSign.test(this.state.formula + event.target.value) ? this.state.formula : this.state.previousValue) + event.target.value,
                })
        }

        else if (event.target.value !== '‑') {
            console.log('it also doing something')
            this.setState({
                formula: this.state.previousValue + event.target.value
            })

        }
    }
    
    addDecimal = (event) => {
        // only add decimal if there is no current decimal point present in the input area
        
        if (this.state.input.indexOf(".") === -1) {
          this.setState({ 
            formula: this.state.formula + event.target.value,  
            input: this.state.input + event.target.value });
        }
      };
    clear = () => {
        this.setState({
            input: '0',
            formula: '0',
            previousValue: '',
            currentValue: ''
        })

}
    
    equals = () => {
       
        // the code that works without trying to solve Problem 13:
        let result = eval(this.state.formula.toString())
        
       this.setState({
           /*formula: this.state.formula + ' = ' + eval(this.state.formula.toString()),*/
           formula: result,
           input: result
        }
       )
       
    }
    render() {

        return (
            <div><h1>TEST</h1>
            <div id='calculator'>
                <div id='formula'>{this.state.formula}</div>
                <div id='display'>{this.state.input}</div>
                {/*console.log(this.state.previousValue, this.state.input)*/}
                <div id='row' >
                    <button id='seven' ref={event => createRef(event)} value='7' onClick={this.handleCLick}>7</button>
                    <button id='eight' ref={event => createRef(event)} value='8' onClick={this.handleCLick}>8</button>
                    <button id='nine' ref={event => createRef(event)} value='9' onClick={this.handleCLick}>9</button>
                    <button id='divide' ref={event => createRef(event)} onClick={this.handleOperator} value='/'>/</button>
                </div>
                <div id='row' >
                    <button id='four' ref={event => createRef(event)} value='4' onClick={this.handleCLick}>4</button>
                    <button id='five' ref={event => createRef(event)} value='5' onClick={this.handleCLick}>5</button>
                    <button id='six' ref={event => createRef(event)} value='6' onClick={this.handleCLick}>6</button>
                    <button id='multiply' ref={event => createRef(event)} onClick={this.handleOperator} value='*'>x</button>
                </div>
                <div id='row' ><button id='one' ref={event => createRef(event)} value='1' onClick={this.handleCLick}>1</button>
                    <button id='two' ref={event => createRef(event)} value='2' onClick={this.handleCLick}>2</button>
                    <button id='three' ref={event => createRef(event)} value='3' onClick={this.handleCLick}>3</button>
                    <button id='add' ref={event => createRef(event)} onClick={this.handleOperator} value='+'>+</button>
                </div>
                <div id='row' >
                    <button id='decimal' ref={event => createRef(event)} onClick={this.addDecimal} value='.'>.</button>
                    <button id='zero' ref={event => createRef(event)} value='0' onClick={this.handleCLick}>0</button>
                    <button id='clear' ref={event => createRef(event)} onClick={this.clear} value='AC' >AC</button>
                    <button id='subtract' ref={event => createRef(event)} onClick={this.handleOperator} value="‑">-</button>
                    </div>
                    <button id='equals' ref={event => createRef(event)} onClick={this.equals} value='='>=</button>
                

            </div>
            </div>
        )
    }
}

export default CalculatorTest