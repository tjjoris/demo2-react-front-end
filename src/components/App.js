import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import "./app.css"
import CustomerList from "./CustomerList";
import Loader from "./Loader";

// Main App component
class App extends Component {
    state = {
        customers: [],
        customer: {},
        loader: false,
        url: "http://localhost/laravel/demo2-back-end/public/api/customers"
    };
    getCustomers = async () => {
        this.setState({ loader: true });
        const customers = await axios.get(this.state.url);
        this.setState({ customers: customers.data, loader: false });
    };

    createCustomer = async (data) => {
        this.setState({ loader: true });
        await axios.post(this.state.url, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        });

        this.getCustomers();
    };
    componentDidMount() {
        this.getCustomers();
    }

    //this function is called by child component CustomerList
    //id is passed from Customer component
    onDelete = (id) => {
        this.deleteCustomer(id);
        // console.log("app", id);
    };

    onEdit = data => {
        // console.log("edit app", data);
        this.setState({ customer: data });
    };

    onFormSubmit = (data) => {
        //console.log('submit app', data);
        if (data.isEdit) {
            //if is edit true
        } else {
            //if is edit false
            this.createCustomer(data);
        }
    };

    deleteCustomer = async id => {
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getCustomers();

    };
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
                    <MyForm customer={this.state.customer}
                        onFormSubmit={this.onFormSubmit} />
                    {this.state.loader ? <Loader /> : ""}

                    <CustomerList
                        customers={this.state.customers}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    />
                </div>
            </div>
        );
    }
}

export default App;