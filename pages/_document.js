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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Articles</title>

                <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|Noto+Sans|Open+Sans" rel="stylesheet" />

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