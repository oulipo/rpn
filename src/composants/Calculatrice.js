import React, { Component } from 'react';

class Calculatrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pile: [10,20,30],
            saisie: '123'
        }
    }

    handleEnter = () => {
        let n = Number(this.state.saisie);
        this.setState((state) => ({
            pile: [...state.pile, n],
            saisie: ''
        }))
    }

    handleDel = () => {
        this.setState((state) => ({
            saisie: ''
        }))
    }

    handleDrop = () => {
        let temp = this.state.pile;
        temp.pop()
        this.setState((state) => ({
            pile: temp
        }))
    }

    handleSwap = () => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp[temp.length - 1] = b;
            temp[temp.length - 2] = a;
            this.setState((state) => ({
                pile: temp
            }))
        }
    }

    handleNumber = (event) => {
        let v = event.target.dataset.valeur;
        this.setState((state) => ({
            saisie: state.saisie + v
        }))
    }

    handleNeg = () => {
        this.setState((state) => ({
            saisie: -(Number(state.saisie))
        }))
    }

    handlePoint = () => {
        this.setState((state) => ({
            saisie: state.saisie + '.'
        }))
    }

    handleAddition = () => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp.pop()
            temp.pop()

            this.setState((state) => ({
                pile: [...temp, a + b]
            }))
        }
    }

    handleSoustraction = () => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp.pop()
            temp.pop()

            this.setState((state) => ({
                pile: [...temp, b - a]
            }))
        }
    }

    handleMultiplication = () => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp.pop()
            temp.pop()

            this.setState((state) => ({
                pile: [...temp, a * b]
            }))
        }
    }

    handleDivision = () => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp.pop()
            temp.pop()

            this.setState((state) => ({
                pile: [...temp, b / a]
            }))
        }
    }

    render() {
        return (
            <div>
                
                <ul className="affichage">
                    {this.state.pile && this.state.pile.map((nombre, index) => <li key={index}>{nombre}</li>)}
                </ul>

                <div className="saisie">{this.state.saisie ? this.state.saisie : '__________'}</div>
                
                <br />

                <button data-valeur="0" onClick={this.handleNumber}>0</button>
                <button data-valeur="1" onClick={this.handleNumber}>1</button>
                <button data-valeur="2" onClick={this.handleNumber}>2</button>
                <button data-valeur="3" onClick={this.handleNumber}>3</button>
                <button data-valeur="4" onClick={this.handleNumber}>4</button>
                <button data-valeur="5" onClick={this.handleNumber}>5</button>
                <button data-valeur="6" onClick={this.handleNumber}>6</button>
                <button data-valeur="7" onClick={this.handleNumber}>7</button>
                <button data-valeur="8" onClick={this.handleNumber}>8</button>
                <button data-valeur="9" onClick={this.handleNumber}>9</button>

                <button data-valeur="." onClick={this.handlePoint}>.</button>
                <button data-valeur="neg" onClick={this.handleNeg}>+/-</button>
                <br />
                <button data-valeur="+" onClick={this.handleAddition}>+</button>
                <button data-valeur="-" onClick={this.handleSoustraction}>-</button>
                <button data-valeur="*" onClick={this.handleMultiplication}>*</button>
                <button data-valeur="/" onClick={this.handleDivision}>/</button>
                <br />
                <button onClick={this.handleEnter}>ENTER</button>
                <button onClick={this.handleDel}>DEL</button>
                <button onClick={this.handleSwap}>SWAP</button>
                <button onClick={this.handleDrop}>DROP</button>
            </div>

        );
    }
}

export default Calculatrice;