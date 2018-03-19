import React from 'react'
import withRedux from "next-redux-wrapper";
import {Col} from "reactstrap";

import Menu from "../components/Menu";
import Article from "../components/Article";
import Layout from "../components/Layout";

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
