import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

const App = ({children}) => (
    <div className="App">
        <Header/>
        <div className="main">{children}</div>
        <Footer/>
    </div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

App.defaultProps = {
    children: null
};


export default App;
