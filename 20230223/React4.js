class C extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div> Props :{this.props.text} </div>
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div> <C text={this.props.id}/> </div>
    }
}

class A extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div> <B id={this.props.name} /> </div>
    }
}

class Props extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return <div> <A name="Hynn" /> </div>
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            word : '',
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({ value : e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({ 
            word:this.state.value,
            value : "",
        })

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button type="submit">Submit</button>
                <div>{this.state.word}</div>
            </form>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [
                { id: 1, subject : "Hynn"},
                { id: 2, subject : "Hynn"},
                { id: 3, subject : "Hynn"},
                { id: 4, subject : "Hynn"},
                { id: 5, subject : "Hynn"}
            ]
        }
    }

    getList (board) {
        return board.map((v)=>{
            return <li key={v.id}>{v.subject}</li>
        })
    }

    render(){
        return (
        <ul> 
            {this.getList(this.state.board)}
            </ul>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number : 0,
            Loading : true,
        }

        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    }
    componentDidMount(){
        // Axios
        // this.setState({ number: 10})
        setTimeout(()=>{
            this.setState({ number : 10, Loading : false})
        },3000)
    }

    componentDidUpdate(){
        console.log(this.state.number)
        if(this.state.Loading === true){
            setTimeout(()=>{this.increment()},1000)
        }
    }

    setLoading = () => {
        this.setState({ Loading: true})
    }

    increment = () => {
        this.setState({ number : this.state.number +1, Loading : false})
    }

    decrement = () => {
        this.setState ({ number : this.state.number -1,Loading: false })
    }

    // increment (){
    //     this.setState({ number : this.state.number +1})
    // }

    // decrement(){
    //     this.setState({ number : this.state.number -1})
    // }

    render(){
        if(this.state.Loading) return <div>Loading..</div>
        return (
            <div>
                <h2>{this.state.number}</h2>
                <button onClick={this.setLoading}>+</button>
                <button onClick={this.setLoading}>-</button>
                {/* <button onClick={()=>{
                    this.setState({ number : this.state.number +1})
                }}>+</button>
                <button onClick={()=>{
                    this.setState({ number : this.state.number -1})
                }}>-</button> */}
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <Counter id="10" name="9" value="100" className="tst" text="123" />
            <Form />
            <List />
            <Props />
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)