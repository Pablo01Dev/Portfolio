import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/pablo-guimar%C3%A3es-a31197144/" className="footer__social-link" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/Pablo01Dev" className="footer__social-link" target="_blank">
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/pablogomesdg/" className="footer__social-link" target="_blank">
                    <FaInstagram />
                </a>
            </div>

            <p className="footer__copyright text-cs">
                &copy; 2023 <span>Bruno</span>. Todos os direitos Reservados
            </p>

            <p className="footer__copyright text-cs">
                Desenvolvido por <span>Bruno Oliveira</span>
            </p>
        </div>
    </footer>
    );
};

export default Footer;