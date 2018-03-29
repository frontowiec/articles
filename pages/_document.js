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

                <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

                <script src="../static/assets/js/core/jquery.3.2.1.min.js" type="text/javascript"></script>
                <script src="../static/assets/js/core/popper.min.js" type="text/javascript"></script>
                <script src="../static/assets/js/core/bootstrap.min.js" type="text/javascript"></script>
                <script src="../static/assets/js/plugins/bootstrap-switch.js"></script>
                <script src="../static/assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
                <script src="../static/assets/js/plugins/bootstrap-datepicker.js" type="text/javascript"></script>
                <script src="../static/assets/js/now-ui-kit.js?v=1.1.0" type="text/javascript"></script>

                <title>Articles</title>

                <style dangerouslySetInnerHTML={{__html: bootstrap}}/>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                {this.props.styleTags}
            </Head>
            <body className="template-page sidebar-collapse">
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}