import React from 'react';

const imgFoot = require('../../images/logo-footer.png');

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col-sm-6 text-left col-sm-inset-6">
                <div className="texts oswald text-uppercase">
                    Indice de Precios al Consumidor
                </div>
                <div className="version">Version {VERSION}</div>
            </div>
            <div className="col-sm-6 text-right col-sm-inset-6">
                <img src={imgFoot} alt="logo"/>
            </div>
        </div>
    </footer>
);

export default Footer;
