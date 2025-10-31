import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    //this function is called when delete button is clicked in Customer component
    onDelete = id => {
        //call the onDelete function passed from App component
        this.props.onDelete(id);
    }
    render() {
        const customers = this.props.customers;
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{ width: '50px', textAlign: "center" }}>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th style={{ width: "148px" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            customers.map((customer) => {
                                return (
                                    <Customer customer={customer} onDelete={this.onDelete} key={customer.id} />
                                )
                            })
                        }
                    </tbody>
                </table >
            </div >
        );
    }
}
export default CustomerList;