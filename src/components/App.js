import React, { Component } from "react";

// Main App component
class App extends Component {
    // Render method to display the component
    render() {
        return <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="/#" className="header item">
                    React JS CRUD with Laravel API
                </a>
            </div>
        </div>;
    }
}

export default App;