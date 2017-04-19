let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(global.app.config.email);

module.exports.send = (user, password, domain) => {
    let mail = {
        from: 'VIC',
        to: user.email,
        subject: '[VIC] Envio de Contraseña',
        html: `Hola ${user.name},<br/><br/>Su contraseña para ingresar al <a href="${domain}">Sistema de gestión</a> es ${password}.<br/><br/>VIC`
    };

    return transporter.sendMail(mail);
};
