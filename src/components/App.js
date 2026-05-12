import React, { Component } from "react";
import axios from "axios";
import api from "../axiosInstance";
import MyForm from "./MyForm";
import "./app.css"
import CustomerList from "./CustomerList";
import Loader from "./Loader";
import LoginBar from "./LoginBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import LoginStatusBar from "./LoginStatusBar";

// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

// Main App component
class App extends Component {
    state = {
        customers: [],
        customer: {},
        loader: false,
        // url: "http://localhost/laravel/demo2-back-end/public/api/customers"
        // url: "https://demo2-back-end.luke-j.com/api/customers"
        url: "http://127.0.0.1:8000/api/customers" //XAMPP
    };

    getCustomers = async () => {
        this.setState({ loader: true });
        const customers = await api.get('/api/customers');
        this.setState({ customers: customers.data, loader: false });
    };

    createCustomer = async (data) => {
        this.setState({ loader: true });
        await api.post("/api/customers", {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        });

        this.getCustomers();
    };
    editCustomer = async (data) => {
        //clear customer obj
        this.setState({ customer: {}, loader: true });
        await api.put(`/api/customers/${data.id}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        })
        this.getCustomers();
    }
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
            this.editCustomer(data);
        } else {
            //if is edit false
            this.createCustomer(data);
        }
    };

    deleteCustomer = async id => {
        this.setState({ loader: true });
        await api.delete(`/api/customers/${id}`);

        this.getCustomers();

    };
    // Render method to display the component
    render() {

        return (
            // <BrowserRouter>
            //     <Routes>
            //         <Route Path="/" element={<Layout />}>
            //             <Route index element={<Home />} />

            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React JS CRUD with Laravel API
                        </a>
                    </div>
                </div>
                <div className="ui main container">

                    {/* <LoginBar /> */}
                    <LoginStatusBar />
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
            // </Route></Routes ></BrowserRouter >
        );
    }
}

export default App;