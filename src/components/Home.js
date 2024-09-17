import React, { useRef } from 'react';
import CustomHook from './CustomHook';
import avatar from '../static/media/avatar.jpg';
import cv from '../static/media/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrand, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <div>
      <section className='home' ref={refTab}>
        <div className="content">
          <div className="name">
            MEU NOME É <span>RENATO</span>
          </div>
          <div className="description">
          Sou um eterno estudante de tecnologia, com uma paixão por descobrir e aplicar as mais recentes inovações. Estou sempre explorando novos aspectos da tecnologia e como ela pode ser utilizada de formas interessantes e impactantes.
          </div>
          <div className='social'>
            <a href={cv} target='_blank' rel='noreferrer noopener'>Download My CV</a>
            <a  href="https://github.com/renato-figueiredo"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
            <a href="https://github.com/renato-figueiredo"><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className="avatar">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <div className="info">
              <div>Fullstack Dev</div>
              <div>Brasileiro</div>
              <div>27 anos</div>
              <div>(҂⌣̀_⌣́)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home