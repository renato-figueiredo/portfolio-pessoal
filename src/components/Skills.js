import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';


const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faReact
    },
    {
      name: 'HTML5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faHtml5
    },
    {
      name: 'CSS3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faJs
    },
    {
      name: 'VueJS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faVuejs
    },
    {
      name: 'Laravel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      icon: faLaravel
    },
  ])

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <div>
      <section className="skills" ref={refTab}>
        <div className="title" ref={(el) => el && refDivs.current.push(el)}>
          This is my Skills
        </div>
        <div className="description" ref={(el) => el && refDivs.current.push(el)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ex, consequatur unde corporis sunt veniam dolorum aut illum perspiciatis tempore cupiditate veritatis voluptatem! Error, reprehenderit. Porro odit quae nemo.
        </div>
        <div className="list" ref={(el) => el && refDivs.current.push(el)}>
          {
            listSkills.map((value, key) => (
              <div key={key} className='item'>
                <FontAwesomeIcon icon={value.icon} />
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