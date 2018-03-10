import {withRouter} from 'next/router'

const ActiveLink = withRouter(({router, menu, childIds}) => {
    const changeRoute = (e, item) => {
        e.preventDefault();
        router.push(
            `/?article=${item.id}`,
            `/article/${item.title.replace(/\s/g, '-')}`,
            {shallow: true}
        );
    };

    return (
        <ul>
            {
                childIds.map(id => (
                    <li key={id}>
                        <a style={{color: router.query.article === menu[id].id ? 'red' : 'black'}}
                           onClick={e => changeRoute(e, menu[id])} href="#">{menu[id].title}</a>
                        <ActiveLink menu={menu} childIds={menu[id].childIds}/>
                    </li>
                ))
            }
        </ul>
    );
});


export default ({menu}) => (
    <nav>
        <ActiveLink menu={menu} childIds={menu._root.childIds}/> {/*id, parentId*/}
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

