import {withRouter} from 'next/router';
import {connect} from 'react-redux';
import {fetchMenu} from "../redux/modules/menuItems";

const ActiveLink = connect(null, dispatch => ({fetchSubitems: id => dispatch(fetchMenu(id))}))(
    withRouter(({router, title, id, hasChildren, fetchSubitems}) => {
        const changeRoute = (e) => {
            e.preventDefault();
            router.push(
                `/?article=${id}`,
                `/article/${title.replace(/\s/g, '-')}`,
                {shallow: true}
            );

            if (hasChildren) {
                console.log('fetch menu for', id);
                fetchSubitems(id);
            }
        };

        return (
            <a onClick={changeRoute} href="#">{title}</a>
        );
    })
);

const Item = (props) => (
    !!props.title &&
    <ul>
        <li>
            <ActiveLink id={props.id} title={props.title} hasChildren={props.childIds.length !== 0}/>
        </li>
        {
            props.childIds.map(id => <ConnectedItem key={id} id={id}/>)
        }
    </ul>
);

const ConnectedItem = connect((state, ownProps) => state.menu.items[ownProps.id] || {})(Item);

const Menu = ({childIds}) => childIds.map(id => <ConnectedItem key={id} id={id}/>);

export default connect(state => state.menu.items._root)(Menu);
