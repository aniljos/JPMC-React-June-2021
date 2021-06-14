

function Hello(props){

    return (
        <div>
            <h3>Hello React</h3>
            <h4>{props.message}</h4>
            <p>Generated @ {new Date().toLocaleTimeString()}</p>
        </div>
    )
}
export default Hello