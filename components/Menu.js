import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {fetchSubItems} from "../redux/modules/menuItems";
import {Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  padding-left: 10px;
`;

const StyledNavLink = styled(NavLink)
    .attrs({
        color: ({active}) => active ? 'red' : 'black',
        weight: ({visited}) => visited === 'true' ? '300' : '600'
    })`
  padding: 0px;
  color: ${({color}) => color};
  font-weight: ${({weight}) => weight};
`;

const Link = ({router, id, title, hasChildren, fetchItems, isActive, isVisited = false}) => {
    const changeRoute = e => {
        e.preventDefault();
        router.push(
            `/?article=${id}`,
            `/article/${title.replace(/\s/g, '-')}`,
            {shallow: true}
        );

        if (hasChildren) {
            fetchItems(id);
        }
    };

    return (
        <StyledNavLink onClick={changeRoute} href="#"
                       active={isActive}
                       visited={isVisited.toString()}>
            {title}
        </StyledNavLink>
    );
};

const RouterLink = withRouter(Link);

const mapDispatchToProps = dispatch => ({
    fetchItems: id => dispatch(fetchSubItems(id))
});

const mapStateToProps = (state, ownProps) => ({
    isActive: state.menu.selected === ownProps.id,
    isVisited: state.menu.items[ownProps.id].visited
});

const ConnectedRouterLink = connect(mapStateToProps, mapDispatchToProps)(RouterLink);

const Item = ({id, childIds, title}) => (
    !!title &&
    <StyledNav vertical>
        <NavItem>
            <ConnectedRouterLink id={id} title={title} hasChildren={childIds.length !== 0}/>
        </NavItem>
        {
            childIds.map(id => <ConnectedItem key={id} id={id}/>)
        }
    </StyledNav>
);

const ConnectedItem = connect((state, ownProps) => state.menu.items[ownProps.id] || {})(Item);

const Menu = ({childIds}) => childIds.map(id => (
    <ConnectedItem key={id} id={id}/>
));

export default connect(state => state.menu.items._root)(Menu);
