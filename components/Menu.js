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
                fetchSubitems(id);
            }
        };

        return (
            <a onClick={changeRoute} href="#">{title}</a>
        );
    })
);

const Menu = ({items}) => (
    <ul>
        {items.map(item => (
            <li key={item.id}>
                <ActiveLink title={item.title} id={item.id} hasChildren={item.childIds.length !== 0}/>
            </li>
        ))}
    </ul>
);

export default connect(state => ({items: Object.values(state.menu.items)}))(Menu);
