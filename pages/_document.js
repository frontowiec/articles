import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.scss';

export default class ArticlesDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags}
    }

    render() {
        return (
            <html>
            <Head>
                <title>Articles</title>
                <style dangerouslySetInnerHTML={{__html: bootstrap}}/>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                {this.props.styleTags}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}