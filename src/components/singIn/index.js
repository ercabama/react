import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import InputTypes from '../common/InputTypes';

import SignInService from '../../services/signIn';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            this.setState({isLogging: true});
            const result = await SignInService.login(this.state);
            if (result.success) {
                window.location = '/';
            }
            this.setState({invalidLogin: false, isLogging: false});
        } catch (err) {
            this.setState({invalidLogin: true, isLogging: false});
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container text-center">
                <div className="login">
                    <div className="row form-group">
                        <div className="col-md-12">
                            <h2 className="survey-title oswald">
                                GABITO
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={e => this.handleSubmit(e)} className="form-signin">
                            <h4>Inicie sesión</h4>
                            <Grid className="text-center">
                                <Row>
                                    <Col sm={4}>
                                        <InputTypes
                                            label="Usuario"
                                            name="username"
                                            value={this.state.username}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <InputTypes
                                            label="Contraseña"
                                            name="password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={e => this.handleChange(e)}
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                            {this.state.isLogging && <p>
                                Iniciando sesión <span className="fa fa-spinner fa-pulse"/>
                            </p>}
                            {this.state.invalidLogin && <p className="text-danger">
                                Usuario y/o contraseña incorrectos.
                            </p>}
                            <button
                                type="submit" disabled={this.state.isLogging}
                                className="btn btn-large btn-primary"
                            > Ingresar
                            </button>                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
