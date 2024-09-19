import React, { useRef, useState } from 'react';
import CustomHook from './CustomHook';
import useCopyToClipboard from './useCopyToClipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp, faCopy  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Contacts = () => {
  const [listContacts] = useState([
    {
      title: 'Email',
      link: 'mailto:renatofigueiredoalves@gmail.com',
      text: 'renatofigueiredoalves@gmail.com',
      icon: faEnvelope,
      copy: true,
    },
    {
      title: 'Telefone',
      link: 'https://api.whatsapp.com/send?phone=5531983328810', //Trocar para link do wpp
      text: '+55 (31) 9 8332-8810',
      icon: faWhatsapp,
      copy: false,
    }
  ]);

  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);

  return (
    <div>
      <section className="contacts" ref={refTab}>
        <div className="title" ref={(el) => el && divs.current.push(el)}>Contatos</div>
        <div className="description" ref={(el) => el && divs.current.push(el)}>
        Sinta-se à vontade para entrar em contato caso queira discutir um projeto, obter mais informações ou explorar oportunidades de trabalho.
        </div>
        <div className="list" ref={(el) => el && divs.current.push(el)}>
          {
            listContacts.map((value, key) => (
              <div key={key} className="item">

                <h3>{value.title}</h3>

                <div className="info">
                  <div>{value.text}</div>
                  <div>
                  <a href={value.link} rel=''>
                    <FontAwesomeIcon icon={value.icon} />
                  </a>

                  {
                  value.copy && <div onClick={() => copyToClipboard(value.text)}>
                    {isCopied ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faCopy} />}
                  </div>
                  }
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

export default Contacts