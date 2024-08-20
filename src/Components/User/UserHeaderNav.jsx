import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import minhasFotos from '../../Assets/feed.svg';
import estatisticas from '../../Assets/estatisticas.svg';
import adicionarFoto from '../../Assets/adicionar.svg';
import sair from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={minhasFotos} alt="Minhas Fotos" />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={estatisticas} alt="Estatísticas" />
        {mobile && ' Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={adicionarFoto} alt="Adicionar Foto" />
        {mobile && ' Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={sair} alt="Sair" />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
