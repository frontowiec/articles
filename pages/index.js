import React from 'react'
import withRedux from "next-redux-wrapper";
import styled from 'styled-components';

import Header from "../components/Header";
import Menu from "../components/Menu";
import Article from "../components/Article";
import Footer from "../components/Footer";

import makeStore from '../redux/store';
import {selectMenuItem} from "../redux/modules/menuSelected";
import {fetchArticle} from "../redux/modules/article";

const Container = styled.div`
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px;
`;

class Index extends React.Component {
    static getInitialProps({store, query}) {
        store.dispatch(fetchArticle(query.id));
    }

    componentWillReceiveProps(nextProps) {
        this.props.selectMenuItem(nextProps.url.query.article || null);
    }

    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Menu/>
                    <Article/>
                </Content>
                <Footer/>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectMenuItem: id => dispatch(selectMenuItem(id))
});

export default withRedux(makeStore, null, mapDispatchToProps)(Index);
