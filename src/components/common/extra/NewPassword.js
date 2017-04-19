import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import {Modal, Grid, Row, Button, InputGroup, FormControl} from 'react-bootstrap';
import {requestPassChg} from '../../../actions/sessionActions';

class NewPass extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        nPass: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            vals: {},
            error: undefined
        };
    }

    setVals(evt) {
        const vals = this.state.vals;
        vals[evt.target.name] = evt.target.value;
        this.setState({vals});
    }

    checkPassAndSubmit() {
        let error = this.state.error;
        error = undefined;
        const vals = this.state.vals;
        const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
        if (!vals.oPass || isEmpty(vals.oPass)) {
            error = 'Debé ingresar su contraseña actual';
        } else if (!regex.test(vals.nPass)) {
            error = 'La contraseña debe estár compuesta por al menos una letra minúcula, ' +
                    'una mayúscula, un número y ser mayor a 6 digitos.';
        } else if (vals.nPass !== vals.cPass) {
            error = 'Las contraseñas no coinciden';
        }

        if (!error) {
            this.props.nPass(vals.nPass, vals.oPass);
        }

        this.setState({error});
    }

    render() {
        const {close} = this.props;
        return (
            <Modal
                show
                onHide={() => close(false)}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title" className="text-center text-info">
                        Cambio de Contraseña
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-info">
                    <Grid>
                        <Row>
                            <InputGroup>
                                <InputGroup.Addon>Contraseña Actual</InputGroup.Addon>
                                <FormControl
                                    type="password" name="oPass"
                                    onChange={evt => this.setVals(evt)}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroup.Addon>Contraseña Nueva</InputGroup.Addon>
                                <FormControl
                                    type="password" name="nPass"
                                    onChange={evt => this.setVals(evt)}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroup.Addon>Confirme Contraseña</InputGroup.Addon>
                                <FormControl
                                    type="password" name="cPass"
                                    onChange={evt => this.setVals(evt)}
                                />
                            </InputGroup>
                        </Row>
                        <Row className="text-center">
                            <br/>
                            <Button onClick={() => this.checkPassAndSubmit()}>Confirme Cambio</Button>
                            {this.state.error && <div className="text-error"><br/>{this.state.error}</div>}
                        </Row>
                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => close(false)}>
                        <i className="fa fa-window-close fa-2x" aria-hidden="true"/>
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default connect(state => ({
    info: state.session.info
}),
dispatch => ({
    nPass: (oPass, nPass) => dispatch(requestPassChg(oPass, nPass))
}))(NewPass);
