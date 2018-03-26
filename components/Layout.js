import {Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";

export default ({children}) => (
    <Fragment>
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
        <Footer/>
    </Fragment>
);
