import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import "./app.css"
import CustomerList from "./CustomerList";
// import Loader from "./Loader";

// Main App component
class App extends Component {
    state = {
        customers: [],
        loader: false,
        url: "http://localhost/laravel/demo2-back-end/public/api/customers"
    };
    getCustomers = async () => {
        this.setState({ loader: true });
        const customers = await axios.get(this.state.url);
        this.setState({ customers: customers.data, loader: false });
    };

    componentDidMount() {
        this.getCustomers();
    }
    // Render method to display the component
    render() {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React JS CRUD with Laravel API
                        </a>
                    </div>
                </div>
                <div className="ui main container">
                    <MyForm />


                    <CustomerList customers={this.state.customers} />
                </div>
            </div>
        );
    }
}

export default App;