import {connect} from 'react-redux';
import AjaxLoader from './AjaxLoader';
import styled from 'styled-components';

const StyledArticle = styled.div`
  width: 65%;
  padding: 10px;
`;

const Article = ({article}) => (
    <StyledArticle>
        <AjaxLoader/>
        <h1>{article.title}</h1>
        <article>{article.content}</article>
    </StyledArticle>
);

export default connect(({article}) => ({article}))(Article);