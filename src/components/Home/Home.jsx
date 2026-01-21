import React from 'react';
import './home.css';
import profile from '../../assets/profile-img.jpeg';
import shapeOne from '../../assets/icon-react.png';
import shapetwo from '../../assets/icon-js.png';
import shapethree from '../../assets/icon-node.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import CV from '../../assets/Curriculo Pablo Guimarães.pdf';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Olá, <span>Meu nome é</span>
                </p>

                <h1 className="home__title text-cs"><span>PABLO</span> GUIMARÃES</h1>

                <p className="home__job">
                    <span className="text-cs">Eu sou um</span> <b>Desenvolvedor Full Stack</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profile} alt="Minha imagem de perfil" className="home__profile" />
                    </div>

                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                    Sou natural do Rio de Janeiro, formado em Análise e Desenvolvimento de Sistemas, um apaixonado por tecnologia. Ao longo dos anos de estudo, venho aprimorando minhas skills no front e no back. 
                </p>

                <div className="home__socials">
                    <a href="https://www.linkedin.com/in/pablo-guimar%C3%A3es-a31197144/" className="home__social-link" target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Pablo01Dev" className="home__social-link" target="_blank">
                        <FaGithub />
                    </a>

                    <a href="https://www.instagram.com/pablogomesdg/" className="home__social-link" target="_blank">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    <a download="" href={CV} className="btn text-cs">Download CV</a>
                    <a href="#skills" className="hero__link text-cs">Minhas Skills</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
    