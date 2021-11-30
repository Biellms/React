import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer">
                    <div className="footer-heading footer-1">
                        <h2>Contato</h2>
                        <a href="mailto:biell.mendes8@gmail.com" target="_blank" rel="noreferrer">E-mail</a>
                        <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div className="footer-heading footer-2">
                        <h2>Portfólio</h2>
                        <a href="https://github.com/Biellms" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                    <div className="footer-heading footer-3">
                        <h2>Telefone</h2>
                        <a href="https://github.com/Biellms" target="_blank" rel="noreferrer">(11) 95977-5765</a>
                    </div>
                    <div className="footer-heading footer-4">
                        <h3>Gabriel Mendes ©copy Todos os Direitos Reservados</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;