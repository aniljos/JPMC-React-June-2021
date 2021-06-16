import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'


function SignIn(props){

    const [name, setName]= useState("");
    const [pwd, setPwd]= useState("");
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    //useEffect(callback, [dependencies])
    // no dependencies == componentDidMount
    useEffect(() => {
        console.log("useEffect componentDidMount");

        // return componentWillUnmount
        return () => {
            console.log("useEffect componentWillUnmount");
        }
    }, []);

    // with dependencies == componentDidUpdate
    useEffect(()=>{
        console.log("useEffect componentDidUpdate: name", name)
    }, [name])

    // with dependencies == componentDidUpdate
    useEffect(()=>{
        console.log("useEffect componentDidUpdate pwd: ", pwd)
    }, [pwd])

    async function signIn(){
        console.log(name, pwd);
        try {
            const url="http://localhost:9000/login";
            const resp = await axios.post(url, {name: name, password: pwd});
            dispatch({type: "SET_AUTH", data: {
                isAuthenticated : true,
                accessToken: resp.data.accessToken,
                refreshToken: resp.data.refreshToken
            }});
            props.history.push("/customers");
            
        } catch (error) {
            
            dispatch({type: "SET_AUTH", data: {
                isAuthenticated : false,
                accessToken: "",
                refreshToken: ""
            }})
            
        }
    }

    return (
        <div>
            <h3>SignIn</h3>
            <p>{isAuth ? "Authenticated": "Not Authenticated"}</p>
            <p>Name</p>
            <div>
                <input className="form-control" value={name} onChange={evt => setName(evt.target.value)}/>
            </div>
            <p>Password</p>
            <div>
                <input className="form-control" value={pwd} onChange={evt => setPwd(evt.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={signIn}>SignIn</button>
            </div>
        </div>
    )
}
export default React.memo(SignIn);