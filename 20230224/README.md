# create React MiniGame 

## Initialize React Code
```javascript
class Square extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render(){
        return (
            <button className="square">
                {/*ToDO*/}
            </button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSquare(i){
        return <Square />
    }

    render(){
        const status = 'Next Player Hynn'

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
        )
    }
}

class Game extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
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
        )
    }
}

const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)
```

Component Tree 
Game => Board > Square