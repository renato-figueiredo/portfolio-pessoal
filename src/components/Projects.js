import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      language: 'HTML, CSS, JavaScript',
      images: '/project1.jpg',
    },
    {
      name: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      language: 'HTML, CSS, JavaScript',
      images: '/project2.jpg',
    },
    {
      name: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      mission: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio.',
      language: 'HTML, CSS, JavaScript',
      images: '/project1.jpg',
    },
  ])

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <div>
      <section className='projects' ref={refTab}>
        <div className="title" ref={(el) => el && refDivs.current.push(el)}>
          This is my Projects
        </div>
        <div className="description" ref={(el) => el && refDivs.current.push(el)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo. Ad mollitia corrupti nesciunt rem ut impedit dolore voluptatum veniam, quas delectus. Aut molestiae pariatur voluptas asperiores, libero tempore cumque.
        </div>
        <div className="list">
          {
            listProjects.map((value, key) => (
              <div key={key} className='item'>
                <div className="images" ref={(el) => el && refDivs.current.push(el)}>
                  <img src={`${process.env.PUBLIC_URL}/${value.images}`} alt="" />
                </div>
                <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                  <h3>{value.name}</h3>
                  <div className="description">{value.description}</div>
                  <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                      <h4>Mission</h4>
                      <div className="description">{value.mission}</div>
                    </div>
                  </div>
                  <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                      <h4>Languages</h4>
                      <div className="description">{value.language}</div>
                    </div>
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