import React, { useRef, useState } from 'react';
import CustomHook from './CustomHook';


const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'Email',
      value: 'renatofigueiredoalves@gmail.com'
    },
    {
      title: 'Telefone',
      value: '+5531983328810'
    }
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <div>
      <section className="contacts" ref={refTab}>
        <div className="title" ref={(el) => el && divs.current.push(el)}>This is my Contacts</div>
        <div className="description" ref={(el) => el && divs.current.push(el)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus dolor amet necessitatibus consectetur iure neque vel, repellat mollitia iusto cumque similique sit numquam fugiat dolorem repudiandae quis fugit facere.
        </div>
        <div className="list" ref={(el) => el && divs.current.push(el)}>
          {
            listContacts.map((value, key) => (
              <div key={key} className="item">
                <h3>{value.title}</h3>
                <div>{value.value}</div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Contacts