import {connect} from 'react-redux';
import AjaxLoader from './AjaxLoader';

const Article = ({article}) => (
    <div>
        <AjaxLoader/>
        <h1>{article.title}</h1>
        <article>{article.content}</article>

        <style jsx>
            {
                `
                    div {
                        width: 65%;
                        padding: 10px;
                    }
                `
            }
        </style>
    </div>
);

export default connect(({article}) => ({article}))(Article);