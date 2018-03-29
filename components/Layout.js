import {Fragment} from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default ({children}) => (
    <Fragment>
        <Header/>
        <div className="wrapper">
            <div className="section">
                {children}
            </div>
            <Footer/>
        </div>
    </Fragment>
);
