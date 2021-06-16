import { Component } from "react";
import axios from 'axios';
import './ListCustomers.css';

class ListCustomers extends Component{

    state  = {
        data: []
    }
    url = "http://localhost:9000/customers";

    async componentDidMount(){
        // AJAX call to be made this lifecycle hook

        //https://calm-beach-18228.herokuapp.com/customers
        //const url = "http://localhost:9000/customers";
        
        this.fetchData()
    }
    async fetchData(){
        try {
            
            // axios.get(url)
            //         .then((resp) => {
            //             console.log("success: ", resp);
                 //           axios.get(url)
                //         .then((resp) => {
                //             console.log("success: ", resp);
                               // axios.get(url)
                                //         .then((resp) => {
                                //             console.log("success: ", resp);
                    
                                //         }, (error) => {
                                //             console.log("error: ", error);
                                //         })

                //         }, (error) => {
                //             console.log("error: ", error);
            //         })
            //         }, (error) => {
            //             console.log("error: ", error);
            //         })
            const resp = await axios.get(this.url);
            console.log("success: ", resp);
            this.setState({
                data: resp.data
            })

        } catch (error) {
            console.log("error: ", error);
        }
    }

    delete = async (evt, customer) => {
        
        //axios.delete == return a Promise-resolved, rejected
        // call1 => call2==> call3

        try {
            
            const resp = await axios.delete(this.url + "/" + customer.id);
            this.fetchData();
           // alert("Deleted");
        } catch (error) {
            alert("Failed to delete")
        }
    }

    renderCustomers(){
        return this.state.data.map((item, index) => {
            return (
                <div className="customer" key={item.id}>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Location: {item.location}</p>
                    <div>
                        <button onClick={(evt) => {this.delete(evt, item)}}>Delete</button>
                    </div>
                </div>
            );
        })
    }
    render(){
        return (
            <div>
                <h3>List Customers</h3>
                <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.renderCustomers()}
                </div>
               
            </div>
        )
    }

}

export default ListCustomers;