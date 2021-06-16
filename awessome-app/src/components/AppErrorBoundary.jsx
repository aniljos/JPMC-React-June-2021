import React, { Component } from 'react';



class AppErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, info) {

        if (error) {
            this.setState({
                hasError: true
            });
        }
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>Something went wrong...</div>
            )
        }
        else {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default AppErrorBoundary;