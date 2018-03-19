import {Container, Row, Col} from 'reactstrap';
import Header from "./Header";
import Footer from "./Footer";

export default ({children}) => (
    <Container>
        <Row>
            <Col>
                <Header/>
            </Col>
        </Row>
        <Row>
            {children}
        </Row>
        <Row>
            <Col>
                <Footer/>
            </Col>
        </Row>
    </Container>
);
