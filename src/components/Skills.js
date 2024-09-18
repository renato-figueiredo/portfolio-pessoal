import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faPython, faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faCodeBranch, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';




const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'Estrutura e Estilização',
      description: 'HTML5, CSS3 e JavaScript',
      icon: [faHtml5, faCss3, faJs]
    },
    {
      name: 'Frameworks e Bibliotecas',
      description: 'React e Bootstrap',
      icon: [faReact, faBootstrap]
    },
    {
      name: 'Linguagens',
      description: 'Python e Javascript',
      icon: [faJs, faPython]
    },
    {
      name: 'Versionamento',
      description: 'Git e GitHub',
      icon: [faCodeBranch, faGithub]
    },
    {
      name: 'Automação e LLMs',
      description: 'Python, Llama, OpenAI e Gemini ',
      icon: [faRobot, faBrain]
    },
    {
      name: 'Linguas Estrangeiras',
      description: 'Inglês: intermediário - Espanhol: básico',
      icon: [faEarthAmericas]
    },
  ])

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <div>
      <section className="skills" ref={refTab}>
        <div className="title" ref={(el) => el && refDivs.current.push(el)}>
          Minhas Habilidades
        </div>
        <div className="description" ref={(el) => el && refDivs.current.push(el)}>
        Um resumo das principais ferramentas e tecnologias que utilizo para criar soluções criativas e eficientes.
        </div>
        <div className="list" ref={(el) => el && refDivs.current.push(el)}>
          {
            listSkills.map((value, key) => (
              <div key={key} className='item'>
                {
                  value.icon.map((icon, key) => (
                    <FontAwesomeIcon key={key} icon={icon} />
                  ))
                }
                <h3>{value.name}</h3>
                <div className="description">{value.description}</div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Skills