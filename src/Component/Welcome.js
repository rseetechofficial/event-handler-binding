import React, { Component } from "react";

class Welcome extends Component {

    render() {
        const { name, classes} = this.props;

        return (
            <h1>
                Welcome {name} - {classes}
            </h1>
        )
    }
}

export default Welcome;