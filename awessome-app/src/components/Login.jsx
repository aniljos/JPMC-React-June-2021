import { Component } from "react";
import {connect} from 'react-redux';
import axios from 'axios'

class Login extends Component{

    state = {
        name: "",
        password: ""
    }
   
    login = async() => {

        try {
            const url="http://localhost:9000/login";
            const resp = await axios.post(url, {name: this.state.name, password: this.state.password});
            this.props.setAuth({
                isAuthenticated : true,
                accessToken: resp.data.accessToken,
                refreshToken: resp.data.refreshToken
            });
        } catch (error) {
            
            this.props.setAuth({
                isAuthenticated : false,
                accessToken: "",
                refreshToken: ""
            });
        }

        
    }
    render(){
        console.log("props", this.props);

        const {name, password} = this.state;
        return(
            <div>
                <p>IsAuthenticated: {this.props.isAuth ? "Authenticated": "Not Authenticated"} </p>
                <p>UserName</p>
                <div>
                    <input value={name} onChange={(evt) =>this.setState({name: evt.target.value})}/>
                </div>
                <p>Password</p>
                <div>
                    <input value={password} onChange={(evt) =>this.setState({password: evt.target.value})}/>
                </div>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

//map redux state to component props
const mapStateToProps = (reduxState) => {
 return {
     isAuth: reduxState.auth.isAuthenticated
 }
}
//map redux dispatch to component props
const mapDispatchToProps = (dispatch) =>{
    return {
        setAuth: (data) => {dispatch({type: "SET_AUTH", data: data})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;