import {slide as ReactBurgerMenu} from 'react-burger-menu'
import Menu from './Menu';

export default () => (
    <div className="d-lg-none">
        <ReactBurgerMenu outerContainerId={"__next"}>
            <Menu/>
        </ReactBurgerMenu>
    </div>
);
