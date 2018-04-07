import React, { Component } from 'react';

export default class UserItem extends Component {
    render() {
        return (
            <React.Fragment>
                <p>NAME: {this.props.info.first_name}</p>
            </React.Fragment>
        );
    }
}