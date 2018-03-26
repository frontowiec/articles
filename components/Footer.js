import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
`;

export default () => (
    <StyledFooter className="footer">
        <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
        </div>
    </StyledFooter>
);
