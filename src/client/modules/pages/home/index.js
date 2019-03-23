import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Home extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                12345
            </div>
        );
    }
}

const store = (state) => {
    const { homeData } = state.get('process').get('areaData').toJS();
    return {
        homeData
    };
};

export default connect(store)(Home);