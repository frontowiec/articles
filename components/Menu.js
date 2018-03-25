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
        color: props => props.active ? 'red' : 'black',
        weight: props => props.visited ? '300' : '600'
    })`
  padding: 0px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;

const mapDispatchToProps = dispatch => ({
    fetchItems: id => dispatch(fetchSubItems(id))
});

const mapStateToProps = (state, ownProps) => ({
    isActive: state.menu.selected === ownProps.id,
    visited: state.menu.items[ownProps.id].visited
});

const ActiveLink = connect(mapStateToProps, mapDispatchToProps)(
    withRouter(props => {
        const changeRoute = (e) => {
            e.preventDefault();
            props.router.push(
                `/?article=${props.id}`,
                `/article/${props.title.replace(/\s/g, '-')}`,
                {shallow: true}
            );

            if (props.hasChildren) {
                props.fetchItems(props.id);
            }
        };

        return (
            <StyledNavLink onClick={changeRoute} href="#"
                           active={props.isActive}
                           visited={props.visited}>
                {props.title}
            </StyledNavLink>
        );
    })
);

const Item = ({id, childIds, title}) => (
    !!title &&
    <StyledNav vertical>
        <NavItem>
            <ActiveLink id={id} title={title} hasChildren={childIds.length !== 0}/>
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
