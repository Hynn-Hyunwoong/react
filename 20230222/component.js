class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <li>List Item</li>
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <div>It's Form</div>
    }
}

class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <ul>
                <CommentItem />
            </ul>
        )
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return( 
                <div>
                    It is Comment
                    <CommentForm />
                    <CommentList />    
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
            <Comment />
        </div>
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render (<App />)