import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {Fragment} from "react";

const ActiveLink = withRouter(({router, title, id}) => {
    const changeRoute = (e) => {
        e.preventDefault();
        router.push(
            `/?article=${id}`,
            `/article/${title.replace(/\s/g, '-')}`,
            {shallow: true}
        );
    };

    return (
        <a onClick={changeRoute} href="#">{title}</a>
    );
});

const Item = (props) => {
    return (
        <ul>
            <li>
                <ActiveLink title={props.title} id={props.id}/>
            </li>
            {props.childIds.map(id => (
                <Fragment key={id}>
                    <MenuItem id={id}/>
                </Fragment>
            ))}
        </ul>
    )
};

const mapStateToProps = (state, ownProps) => {
    return state.menu.items[ownProps.id];
};

const MenuItem = connect(mapStateToProps)(Item);

const Menu = () => (
    <nav>
        <MenuItem id={"_root"}/>
        <style jsx>
            {
                `
                    nav {
                        width: 30%;
                    }
                `
            }
        </style>
    </nav>
);

export default Menu;
