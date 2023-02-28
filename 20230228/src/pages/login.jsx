import { Component } from 'react'

class LoginBox extends Component {
    state = {
        isLogin : false,
    }
    handleLogin(){
        this.setState({ 
            isLogin : !this.state.isLogin
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.handleLogin()}>
                    {isLogin ? 'Logout' : 'Login'}
                </button>
            </div>
        )
    }
}

export default LoginBox