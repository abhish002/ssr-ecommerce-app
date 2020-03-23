import React, { Component } from 'react';
import './app.styles.scss';

import { connect } from 'react-redux';

import { getProducts } from '../../redux/actions/shop/shop.actions';

import Header from "../header/header.component";

class App extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { isFetching, products } = this.props;
        if (!isFetching) {
            console.log(products)
        }
        return (
            <div>
                <Header />
            </div>
        )
    }
};

const mapStateToProps = ({ shop: { isFetching, products } }) => ({
    isFetching,
    products,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

