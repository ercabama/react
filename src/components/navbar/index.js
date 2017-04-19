import React,{Component, PropTypes} from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import Buttons from './buttons';
import {requestLogout,showForms} from '../../actions/sessionActions';
import SignIn from '../singIn';

const buttonsRoles = rol => {
    switch (rol) {
        case 'admin': return [{
            title: 'Mantenimiento',
            actions: [
                {path: '/calculate', classType: 'fa-address-card', label: 'Mantenimiento de Muestra'}
            ]
        }, {
            title: 'Calculo',
            actions: [
                {path: '/calculate', classType: 'fa-calculator', label: 'Ejecutar Calculo'},
                {path: '/viewCalc', classType: 'fa-eye', label: 'Visualizar Calculo'}
            ]
        }];
        default:
            return [];
    }
};

class NavButton extends Component {
    static propTypes = {
        rol: PropTypes.string.isRequired,
        close: PropTypes.func.isRequired,        
        requestLogOut: PropTypes.func.isRequired
        
    }

    loginOut() {
        this.props.requestLogOut();
    }
    render() {
        const {rol, close, isOpen} = this.props;        
        return (
            <nav className="navbar navbar-default">
                <ul className="nav nav-tabs">
                    {buttonsRoles(rol).map((buttons, i) =>
                        <NavDropdown eventKey={i} title={buttons.title}>
                            {buttons.actions.map((button, i2) => <MenuItem eventKey={`${i}.${i2}`}>
                                <Buttons
                                    key={button.label} path={button.path} classType={button.classType}
                                    label={button.label}
                                />
                            </MenuItem>)}
                        </NavDropdown>
                    )}
                    {rol && <div> <li className="navbar-right">
                <a role="button" onClick={() => this.loginOut()}>
                    <span className="fa fa-sign-out"/> Cerrar sesión
                </a>
                    </li>
                    <li className="navbar-right">
                        <a role="button" onClick={() => close(true)}>
                            <span className="fa fa-tasks"/> Cambiar Contraseña
                        </a>
                    </li></div>}
                    <li className="navbar-right">
                        <a role="button">
                            <span className="fa fa-user"/> Sing In
                        </a>
                    </li>
                </ul>
                
                {isOpen && <SignIn/>}
                
            </nav>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        requestLogOut: () => dispatch(requestLogout())        
    })
)(NavButton);
