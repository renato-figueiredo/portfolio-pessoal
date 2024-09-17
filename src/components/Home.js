import React, { useRef } from 'react';
import CustomHook from './CustomHook';


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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure saepe nihil molestiae praesentium rerum nesciunt reiciendis minima? Eos cumque laboriosam nostrum rem libero consequuntur ab non? Expedita, aperiam necessitatibus!
          </div>
          <a href="/cv.pdf" target='_blank' rel='noreferrer noopener'>Download My CV</a>
        </div>
        <div className="avatar">
          <div className="card">
            <img src="/avatar.jpg" alt="" />
            <div className="info">
              <div>Desenvolvedor</div>
              <div>Brasileiro</div>
              <div>03/12</div>
              <div>Male</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home