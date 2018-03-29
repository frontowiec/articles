import {Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, Container, NavItem, NavLink} from "reactstrap";

export default () => (
    <Navbar expand="lg" color="primary" fixed="top" color-on-scroll="400">
        <Container>
            <div className="navbar-translate">
                <NavbarBrand href="http://demos.creative-tim.com/now-ui-kit/index.html"
                             rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom"
                             target="_blank">
                    Now Ui Kit
                </NavbarBrand>
                <NavbarToggler aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </NavbarToggler>
            </div>
            <Collapse className="justify-content-end" navbar data-nav-image="../static/assets/img/blurred-image-1.jpg">
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#pablo">
                            <p>Link</p>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#pablo">
                            <p>Link</p>
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink rel="tooltip" title="Follow us on Twitter"
                                 data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                            <i className="fa fa-twitter"></i>
                            <p className="d-lg-none d-xl-none">Twitter</p>
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink rel="tooltip" title="Like us on Facebook"
                                 data-placement="bottom" href="https://www.facebook.com/CreativeTim"
                                 target="_blank">
                            <i className="fa fa-facebook-square"></i>
                            <p className="d-lg-none d-xl-none">Facebook</p>
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink rel="tooltip" title="Follow us on Instagram"
                                 data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial"
                                 target="_blank">
                            <i className="fa fa-instagram"></i>
                            <p className="d-lg-none d-xl-none">Instagram</p>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
);
