import { Component } from "react";
import {connect} from 'react-redux';


class Login extends Component{

    // constructor(props){
    //     super(props);
    // }
    render(){
        console.log("props", this.props);
        return(
            <div>
                <p>IsAuthenticated: {this.props.isAuth ? "Authenticated": "Not Authenticated"} </p>
                <button>Login</button>
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

export default connect(mapStateToProps)(Login);
//export default Login;