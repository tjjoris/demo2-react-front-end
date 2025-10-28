import React, { Component } from "react";

class Customer extends Component {
    render() {
        return (
            <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td>luke</td>
                <td>myemail</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Customer;