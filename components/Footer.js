import {Container} from "reactstrap";

export default () => (
    <footer className="footer">
        <Container>
            <nav>
                <ul>
                    <li>
                        <a href="http://presentation.creative-tim.com">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="http://blog.creative-tim.com">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md">
                            MIT License
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="copyright">
                Powered by News API
            </div>
        </Container>
    </footer>
);
