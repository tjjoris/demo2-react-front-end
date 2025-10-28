import React, { Component } from "react";
import MyForm from "./MyForm";

// Main App component
class App extends Component {
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
                <MyForm />
                <div className="ui main container">
                    Test
                    <MyForm />
                </div>
            </div>
        );
    }
}

export default App;