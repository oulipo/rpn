import React, { Component } from 'react';
import Touche from './Touche';

class Calculatrice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pile: [10, 20, 30],
            saisie: ''
        }
    }

    handleTouche = (event) => {
        let symbole = event.target.innerText;
        let temp = this.state.pile;
        switch (symbole) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState((state) => ({
                    saisie: state.saisie + symbole
                }));
                break;
            case '+':
                this.operation('+');
                break;
            case '-':
                this.operation('-');
                break;
            case '*':
                this.operation('*');
                break;
            case '/':
                this.operation('/');
                break;
            case 'ENTER':
                let n = Number(this.state.saisie);
                this.setState((state) => ({
                    pile: [...state.pile, n],
                    saisie: ''
                }));
                break;
            case 'DEL':
                this.setState((state) => ({
                    saisie: ''
                }));
                break;
            case 'DROP':
                temp.pop()
                this.setState((state) => ({
                    pile: temp
                }));
                break;
            case 'SWAP':
                if (this.state.pile.length > 1) {
                    let a = temp[temp.length - 1], b = temp[temp.length - 2];
                    temp[temp.length - 1] = b;
                    temp[temp.length - 2] = a;
                    this.setState((state) => ({
                        pile: temp
                    }))
                }
                break;
            case 'NEG':
                this.setState((state) => ({
                    saisie: -(Number(state.saisie))
                }))
                break;
            case '.':
                this.setState((state) => ({
                    saisie: state.saisie + '.'
                }))
                break;

            default:
                break;
        }

    }

    operation = (op) => {
        if (this.state.pile.length > 1) {
            let temp = this.state.pile;
            let a = temp[temp.length - 1], b = temp[temp.length - 2];
            temp.pop()
            temp.pop()
            switch (op) {
                case '+':
                    this.setState((state) => ({
                        pile: [...temp, b + a]
                    }));
                    break;
                case '-':
                    this.setState((state) => ({
                        pile: [...temp, b - a]
                    }));
                    break;
                case '*':
                    this.setState((state) => ({
                        pile: [...temp, b * a]
                    }));
                    break;
                case '/':
                    this.setState((state) => ({
                        pile: [...temp, b / a]
                    }));
                    break;
                default:
                    break;
            }
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

                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <Touche key={n} libelle={n} click={this.handleTouche} />)
                }

                <Touche libelle="." click={this.handleTouche} />
                <Touche libelle="NEG" click={this.handleTouche} />
                <br />
                <Touche libelle="+" click={this.handleTouche} />
                <Touche libelle="-" click={this.handleTouche} />
                <Touche libelle="*" click={this.handleTouche} />
                <Touche libelle="/" click={this.handleTouche} />
                <br />
                <Touche libelle="ENTER" click={this.handleTouche} />
                <Touche libelle="DEL" click={this.handleTouche} />
                <Touche libelle="SWAP" click={this.handleTouche} />
                <Touche libelle="DROP" click={this.handleTouche} />

            </div>

        );
    }
}

export default Calculatrice;