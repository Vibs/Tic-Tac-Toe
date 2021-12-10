import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// KØR VIA kommandoen "npm start" i konsollen

// Child component (fordi den bliver kaldt fra Board)
class Square extends React.Component {

    // {this.props.value} == i Board-componenten indsætter jeg en Square hvor jeg giver den en proporty med navnet 'value' med
    render(){
        return (
            <button 
                className="square" 
                /*når en square klikkes på kaldes den funktion som ligges i onClick'proppen som gives med fra Board-component*/
                onClick={() => {this.props.onClick()}}
            >
                {this.props.value}
            </button>
        );
    }
}

// Parent component (fordi den kalder Square-komponent)
class Board extends React.Component {
   // jeg sætter hvert square-components state her i constructoren
   constructor(props){
    /**
     * In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
     * All React component classes that have a constructor should start with a super(props) call.
     */
    super(props);
    this.state = {
        squares: Array(9).fill(null),
    };
}

    handleClick(i) {
        //slice == kopierer array
        const squares = this.state.squares.slice();

        squares[i] = 'X';

        this.setState({squares: squares});
    }

    renderSquare(i) {

        // denne returnerer så hele square-komponentet
        // value={i} == en proporty som kaldes value
        return (
        <Square 
            value = {this.state.squares[i]}
            onClick = {() => this.handleClick(i)} 
        />
        );
        // man kunne også returnere to: return [<Square />,<Square />];
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

// parent component for board (som så er parent component for Square)
class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
