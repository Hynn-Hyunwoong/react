class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <ul className="comment-row">
                <li className="comment-id">{this.props.userId}</li>
                <li className="comment-content">{this.props.content}</li>
                <li className="comment-date">{this.props.date}</li>
            </ul>
        )
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        console.log('CommentForm',this.props)
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.state = {
            value : ''
        }
    }
    changeHandler(e){
        const {value} = e.target
        this.setState({
            ...this.state,
            value,
        })
        // this.setState({
        //     ...this.state,
        //     value : e.target.value,
        // })
    }
    
    submitHandler(e){
        e.preventDefault()
        // console.dir(e.target)
        this.props.create(this.state.value)
        this.setState({value:''})
        // e.target.reset()
        // e.target.commentInput.focus()
        // console.log(this.props.create)
        // this.props.create(e.target)
    }
    render(){
        return (
            <li className="comment-form">
                <form onSubmit={this.submitHandler}>
                    <h4>InsertComment<span>({this.props.length})</span>
                    </h4>
                    <span className="ps_box">
                        <input type="text" onChange={this.changeHandler} className="int" id="commentInput"  value={this.state.value} placeholder="Please Input your comment" />
                    </span>
                    <input type="submit" value="등록" className="btn"/>
                </form>
            </li>
        )
    }
}

class CommentList extends React.Component {
    // data type of this.props.items -> Array
    // comment array
    // comment tree is object in array [{}.{},{}...]
    constructor(props) {
        super(props)
    }

    loop(v,k){
        return <CommentItem key={k} userId="Hynn" content={v.content} date="2023-02-22" />
    }
    render(){
        return <li>{this.props.items.map(this.loop)}</li>
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment:[
                {
                    userId : "Hynn1",
                    content : "HiHi",
                    date : "2023-02-22"
                },
                {
                    userId : "Hynn",
                    content : "HiHi2",
                    date : "2023-02-22"
                },
                {
                    userId : "Hynn",
                    content : "HiHi3",
                    date : "2023-02-22"
                },
                {
                    userId : "Hynn",
                    content : "HiHi4",
                    date : "2023-02-22"
                },
            ]
        }
        this.create = this.create.bind(this)
        //Option2 
        //None
    }

    create(content){
        this.setState({comment:[
            {userId : 'content', content, date : "2023-02-22"},...this.state.comment]})
        //{} Align 
        // this.setState({
        //     comment : [
        //         ...this.state.comment,{
        //             userId : "Hyunwoong",
        //             content,
        //             date : "2023-02-22"
        //         },
        //     ],
        // })
    }
    //option 2
    // create() => {
    //     this.setState({ text: "B")
    // }

    render(){
        return( 
                <div className="comment">
                    It is Comment
                    <CommentForm create={this.create} length={this.state.comment.length}/>
                    <CommentList items={this.state.comment} />    
                </div>
                )
    }
}

// props = value 
// create to function for change to comment state  
// throw form
// call to changed state form

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Comment />
        </div>
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render (<App />)