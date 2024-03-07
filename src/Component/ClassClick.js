import React, { Component } from "react";

class ClassClick extends Component {

    clickMe() {
        console.log("Class button Clicked!");
    }
    
    render() {
        return (
            <>
                <button onClick={this.clickMe}> Class Click</button>
            </>
        )
    }
};

export default ClassClick;