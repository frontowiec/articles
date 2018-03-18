import {Fragment} from "react";
import ReactLoading from 'react-loading';
import {connect} from 'react-redux';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: inherit;
`;

const Loader = ({isFetching}) => (
    <StyledLoader>
        {
            isFetching && <Fragment>
                <ReactLoading type={'balls'} color={'#000'} width='100px' height='100px'/>
                <h4>Loading article</h4>
            </Fragment>
        }
    </StyledLoader>
);

export default connect(({isFetching}) => ({isFetching}))(Loader);