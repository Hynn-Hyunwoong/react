// React Virtual DOM, First Operating DOM Object is root
class LoginBtn extends React.Component {
    constructor(props){
        super(props)
        console.log("Props",props)
        // Status, 상태
        // data 가 바뀌면 화면이 바뀜. 
        // === State가 바뀌면 Component 가 변경됨
        this.state = {
            isLogin : false,
        }
    }

    render(){
        // console.log(this.state.isLogin)
        // return React.createElement(
        //     'button',
        //     { 
        //         onClick: () => {
        //             this.setState({ isLogin : !this.state.isLogin})
        //         },
        //     },
        //     this.state.isLogin ? "Logout" : "Login")
        //     // React 문법
        //     // React.createElement('ElementName', "{Option}", "InnerHTML")

        // JSX 
        return (
            <button 
                onClick={()=>{
                    this.setState({isLogin: !this.state.isLogin})
                }}
            >
                {this.state.isLogin ? "Logout" : "Login"}
            </button>
        )
            
    }
}   
const root = ReactDOM.createRoot(document.querySelector("#root")) 
// 인자값이 필요할때
root.render(<LoginBtn id="test">HiHi</LoginBtn>)

// 인자값이 필요없을때
// root.render(<LoginBtn />) //실행가능

// root.render(React.createElement("h1", null, "Hi Team"))\
/* < = react.createElement(LoginBtn)
    LoginBtn /> = Babel render function
    이것도 가능
    <LoginBtn></LoginBtn>
*/

//React is Component Definition
