import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faCss3, faJs, faStripe, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import project1 from '../static/media/project-mgpocket.webp';
import project2 from '../static/media/project-IA.webp';

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Site Institucional',
      description: 'Desenvolvimento de uma plataforma institucional para a empresa MG Pocket, projetada para fornecer uma interface clara e acessível...',
      mission: 'Criar uma presença online sólida e profissional para a empresa, garantindo que comunique efetivamente a identidade da empresa e facilite o acesso às informações e serviços oferecidos.',
      language: [faCss3, faJs, faBootstrap],
      images: project1,
      github: 'https://github.com/renato-figueiredo/institutional-mgpocket',
      website: 'https://renato-figueiredo.github.io/institutional-mgpocket/',
    },
    {
      name: 'MicroSaas',
      description: 'Projeto de estudo em Construção - Em Breve',
      mission: 'Aprofundar estudos de backend para criação de sistemas complexos.',
      language: [faReact, faStripe, faNodeJs],
      images: project2,
      github: '#',
      website: '#',
    },
    // {
    //   name: 'MicroSaas',
    //   description: 'Projeto em Construção - Em Breve',
    //   mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
    //   language: 'HTML, CSS, JavaScript',
    //   images: project1,
    // },
  ])

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <div>
      <section className='projects' ref={refTab}>
        <div className="title" ref={(el) => el && refDivs.current.push(el)}>
          Meus Projetos
        </div>
        <div className="description" ref={(el) => el && refDivs.current.push(el)}>
        Uma seleção dos projetos que desenvolvi, aplicando as principais tecnologias e ferramentas que domino.
        </div>
        <div className="list">
          {
            listProjects.map((value, key) => (
              <div key={key} className='item'>
                <div className="images" ref={(el) => el && refDivs.current.push(el)}>
                <a href={value.website}>
                  <img src={value.images} alt="" />
                </a>
                </div>
                <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                  <h3>{value.name}</h3>
                  <div className="description">{value.description}</div>
                  <div className="mission">
                    <div><FontAwesomeIcon icon={faBullseye} /></div>
                    <div>
                      <h4>Objetivo</h4>
                      <div className="description">{value.mission}</div>
                    </div>
                  </div>
                  <div className="mission">
                    <div>
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                    <div>
                      <div className="icons">
                        {
                        value.language.map((icon, key) => (
                        <FontAwesomeIcon key={key} icon={icon} />
                        ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="links">
                    <a href={value.website} target='_blank' rel='noreferrer noopener'>Visualizar</a>
                    <a href={value.github} target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faGithub} /></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Projects