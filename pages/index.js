import React from 'react'
import withRedux from "next-redux-wrapper";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Article from "../components/Article";
import Footer from "../components/Footer";

import makeStore from '../redux/store';
import {selectMenuItem} from "../redux/modules/menuSelected";
import {fetchArticle} from "../redux/modules/article";

class Index extends React.Component {
    static getInitialProps({store, query}) {
        store.dispatch(fetchArticle(query.id));
    }

    componentWillReceiveProps(nextProps) {
        this.props.selectMenuItem(nextProps.url.query.article || null);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <Menu/>
                    <Article/>
                </div>
                <Footer/>

                <style jsx>{
                    `
            .container {
                margin: 10px;
            }

            .content {
                display: flex;
                flex-flow: row wrap;
                margin: 10px;
            }
            `
                }</style>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectMenuItem: id => dispatch(selectMenuItem(id))
});

export default withRedux(makeStore, null, mapDispatchToProps)(Index);
