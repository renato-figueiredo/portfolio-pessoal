import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/action';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({activeTab}) => {

  const [listNav] = useState([
    {
      title:'home',
      tag:'home'
    },
    {
      title:'habilidade',
      tag:'skills'
    },
    {
      title:'projetos',
      tag:'projects'
    },
    {
      title:'contato',
      tag:'contacts'
    }
  ]);
  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value))
    toggleNav();
  }

  const [statusNav, setStatusNav] = useState('');
  const toggleNav = () => {
    setStatusNav(statusNav === 'active' ? null : 'active');
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <header>
      <div className='logo' onClick={() => scrollToTop()}>
      {/* <img src="/logo192.png" alt="" /> */}
      Renato<span>.dev</span>
      </div>
      <nav className={statusNav}>
        {
          listNav.map((value, key) => (
            <span key={key} className={activeTab === value.tag ? 'active' : ''}
            onClick={() => changeTab(value.tag)}
            >{value.title}</span>
          ))
        }
      </nav>
      <div className='icon-bar' onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )

}
const mapStateToProps = (state) => ({
  activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar)