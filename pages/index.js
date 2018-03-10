import React from 'react'

import Header from "../components/Header";
import Menu from "../components/Menu";
import Article from "../components/Article";
import Footer from "../components/Footer";

import menuData from '../data/menu';

export default class extends React.Component {
    static getInitialProps() {
        console.log('initial props');
        return {};
    }

    componentWillReceiveProps(nextProps) {
        const {pathname, query} = nextProps.url;
        console.log(query);
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <div className="content">
                    <Menu menu={menuData}/>
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
