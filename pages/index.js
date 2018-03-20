import React from 'react'
import withRedux from "next-redux-wrapper";
import {Col} from "reactstrap";
import fetch from 'node-fetch';

import Menu from "../components/Menu";
import Article from "../components/Article";
import Layout from "../components/Layout";

import makeStore from '../redux/store';
import {selectMenuItem} from "../redux/modules/menuSelected";
import {loadArticle} from "../redux/modules/article";

class Index extends React.Component {
    static getInitialProps({store, query}) {
        store.dispatch(selectMenuItem('37a48fec-bc98-4848-b4e2-338d2e39fd23'));

        return fetch('http://localhost:3000/api/article/37a48fec-bc98-4848-b4e2-338d2e39fd23')
            .then(data => data.json())
            .then(article => store.dispatch(loadArticle(article)));
    }

    componentWillReceiveProps(nextProps) {
        this.props.selectMenuItem(nextProps.url.query.article || null);
    }

    render() {
        return (
            <Layout>
                <Col sm={5}>
                    <Menu/>
                </Col>
                <Col sm={7}>
                    <Article/>
                </Col>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectMenuItem: id => dispatch(selectMenuItem(id))
});

export default withRedux(makeStore, null, mapDispatchToProps)(Index);
