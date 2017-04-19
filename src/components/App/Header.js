import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {requestSession, requestLogout, showForms} from '../../actions/sessionActions';
import NewPass from '../common/extra/NewPassword';
import NavBar from '../navbar';

class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            _id: PropTypes.string,
            user: PropTypes.string,
            rol: PropTypes.string
        }),
        rSession: PropTypes.func.isRequired,
        requestLogOut: PropTypes.func.isRequired
    };
    static defaultProps = {
        user: {
            _id: '',
            user: '',
            rol: '',            
           
            
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            showModal: false,
            windowsOpen: true
        };
    }

    componentWillMount() {
        this.props.rSession();        
    }

    loginOut() {
        this.props.requestLogOut();
    }
    render() {
        const close = value => this.setState({showModal: value});
        const user = this.props.user;
        return (
            <header>
                <NavBar rol={user.rol} close={close} isOpen={this.state.windowsOpen} />                
            </header>
            
            
        );
    }
}

export default connect(
    state => ({
        user: state.session.user
        
    }),
    dispatch => ({
        rSession: () => dispatch(requestSession()),
        requestLogOut: () => dispatch(requestLogout())
        
    })
)(Header);

